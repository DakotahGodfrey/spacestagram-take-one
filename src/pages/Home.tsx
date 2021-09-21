import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app';
import { getMostRecentPosts, selectPosts } from '../app/slices/posts';
import { Feed, Loader } from '../components';

const Home = () => {
  const dispatch = useAppDispatch();
  const postsSlice = useAppSelector(selectPosts);
  const { posts } = postsSlice;

  useEffect(() => {
    dispatch(getMostRecentPosts());
  }, [dispatch]);
  return (
    <main>{posts.length === 0 ? <Loader /> : <Feed posts={posts} />}</main>
  );
};

export default Home;
