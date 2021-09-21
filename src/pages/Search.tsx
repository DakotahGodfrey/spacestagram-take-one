import { DatePicker } from '../components';
import { useState } from 'react';
import { Month } from '../types';

const Search = () => {
  const currentYear = new Date().getFullYear();
  const [month, setMonth] = useState<Month>('January');
  const [year, setYear] = useState<number>(1995);
  const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(parseFloat(e.target.value));
  };
  const handleMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setMonth(e.target.value);
  };
  return (
    <main>
      <DatePicker
        month={month}
        handleMonth={handleMonth}
        handleYear={handleYear}
        year={year}
        max={currentYear}
      />
    </main>
  );
};

export default Search;
