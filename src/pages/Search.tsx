import { useEffect } from 'react';
import { DatePicker, Feed } from '../components';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app';
import { getPostsByMonth, selectPosts } from '../app/slices/posts';

const Search = () => {
  const dispatch = useAppDispatch();
  const postsSlice = useAppSelector(selectPosts);
  const { results } = postsSlice;
  const currentYear = new Date().getFullYear();
  const [month, setMonth] = useState<number>(1);
  const [year, setYear] = useState<number>(2021);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const endDate = new Date(year, month, 0).toISOString().split('T')[0];
    const startDate = new Date(year, month - 1, 1).toISOString().split('T')[0];
    dispatch(getPostsByMonth({ startDate, endDate }));
  };
  const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(parseFloat(e.target.value));
  };
  const handleMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // @ts-ignore
    setMonth(e.target.value);
  };
  useEffect(() => {
    const endDate = new Date(year, month, 0).toISOString().split('T')[0];
    const startDate = new Date(year, month - 1, 1).toISOString().split('T')[0];
    dispatch(getPostsByMonth({ startDate, endDate }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, month]);
  return (
    <main>
      <DatePicker
        handleSubmit={handleSubmit}
        month={month}
        handleMonth={handleMonth}
        handleYear={handleYear}
        year={year}
        max={currentYear}
      />
      <Feed posts={results} />
    </main>
  );
};

export default Search;
