import React from 'react';
import { Month } from '../types';

interface DatePickerProps {
  month: Month;
  year: number;
  max: number;
  handleYear: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMonth: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  month,
  handleMonth,
  year,
  handleYear,
  max,
}) => {
  return (
    <form>
      <h2>Posts for the Month of:</h2>
      <div className='date-control'>
        <div className='date-control-month'>
          <label htmlFor='month'></label>
          <input
            id='month'
            type='text'
            value={month}
            onChange={(e) => handleMonth(e)}
          />
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
    </form>
  );
};

export default DatePicker;
