import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app';
import { getMostRecentPosts, selectPosts } from '../app/slices/posts';
import { Feed } from '../components';

const Trending = () => {
  const dispatch = useAppDispatch();
  const postsSlice = useAppSelector(selectPosts);
  const { posts } = postsSlice;

  useEffect(() => {
    dispatch(getMostRecentPosts());
  }, [dispatch]);
  return (
    <main>
      <Feed posts={posts} />
    </main>
  );
};

export default Trending;
