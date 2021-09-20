import React from 'react';
import { ReactionBar } from '.';
import { PostObject } from '../app/slices/posts';
interface PostProps {
  post: PostObject;
}
const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className='post'>
      {post.media_type === 'image' ? (
        <figure>
          <img src={post.url} alt='placeholder post' />
        </figure>
      ) : (
        <figure>
          <iframe title={post.title} src={post.url}></iframe>
        </figure>
      )}
      <h2>{post.title}</h2>
      <div>
        <span>{post.date}</span>
      </div>
      {post.explanation ? <p>{post.explanation}</p> : null}
      <ReactionBar />
    </div>
  );
};

export default Post;
