import React from 'react';
import { Post } from '.';
import { PostObject } from '../app/slices/posts';

interface FeedProps {
  posts: PostObject[];
}

const Feed: React.FC<FeedProps> = ({ posts }) => {
  return (
    <div className='feed'>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Feed;
