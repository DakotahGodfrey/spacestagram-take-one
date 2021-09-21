import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app';
import { getPostsByDate, selectPosts } from '../app/slices/posts';
import { Post } from '../components';

interface PostDetailsProps {
  match: any;
}

const PostDetails: React.FC<PostDetailsProps> = ({ match }) => {
  const dispatch = useAppDispatch();
  const postsSlice = useAppSelector(selectPosts);
  useEffect(() => {
    dispatch(getPostsByDate(match.params.date));
  }, [dispatch, match.params.date]);
  const { post } = postsSlice;
  if (post) {
    return (
      <main className='single-post'>
        <Post post={post} detailed />
      </main>
    );
  }
  return <div></div>;
};

export default PostDetails;
