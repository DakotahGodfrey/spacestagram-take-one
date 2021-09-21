import React from 'react';
import { IoMdSearch } from 'react-icons/io';

interface DatePickerProps {
  month: number;
  year: number;
  max: number;
  handleYear: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMonth: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  month,
  handleMonth,
  year,
  handleYear,
  max,
  handleSubmit,
}) => {
  console.log(month);
  return (
    <form onSubmit={handleSubmit} className='date-picker'>
      <div className='form-control'>
        <div className='date-control'>
          <select
            name='months'
            id='months'
            value={month}
            onChange={(e) => handleMonth(e)}
          >
            <option value={1}>January</option>
            <option value={2}>February</option>
            <option value={3}>March</option>
            <option value={4}>April</option>
            <option value={5}>May</option>
            <option value={6}>June</option>
            <option value={7}>July</option>
            <option value={8}>August</option>
            <option value={9}>September</option>
            <option value={10}>October</option>
            <option value={11}>November</option>
            <option value={12}>December</option>
          </select>
        </div>
        <div className='date-control-year'>
          <label htmlFor='year'></label>
          <input
            id='year'
            type='number'
            min='1995'
            max='2021'
            value={year}
            onChange={(e) => handleYear(e)}
          />
        </div>
      </div>
      <button className='btn-icon btn-nav'>
        <IoMdSearch />
      </button>
    </form>
  );
};

export default DatePicker;
