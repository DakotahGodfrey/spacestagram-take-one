import React from 'react';
import { Post } from '.';
import { PostObject } from '../types';

interface FeedProps {
  posts: PostObject[];
}

const Feed: React.FC<FeedProps> = ({ posts }) => {
  return (
    <div className='feed'>
      {posts.map((post) => (
        <Post key={post.date} post={post} />
      ))}
    </div>
  );
};

export default Feed;
