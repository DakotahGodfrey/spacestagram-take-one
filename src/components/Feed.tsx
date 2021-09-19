import React from 'react';
import { Post } from '.';

interface FeedProps {
  posts: { imageSrc: string; caption?: string }[];
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
