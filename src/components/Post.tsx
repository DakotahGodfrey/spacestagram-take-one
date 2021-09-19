import React from 'react';
import { ReactionBar } from '.';
interface PostProps {
  post: {
    imageSrc: string;
    caption?: string;
  };
}
const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className='post'>
      <figure>
        <img src={post.imageSrc} alt='placeholder post' />
      </figure>
      {post.caption ?? <p>{post.caption}</p>}
      <ReactionBar />
    </div>
  );
};

export default Post;
