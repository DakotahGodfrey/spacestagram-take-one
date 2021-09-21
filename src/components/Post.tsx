import React, { useState, useEffect } from 'react';
import { ReactionBar } from '.';
import { useAppDispatch, useAppSelector } from '../app';
import { addToLikes, selectLikes } from '../app/slices/likes';
import { PostObject } from '../types';
interface PostProps {
  post: PostObject;
}
const Post: React.FC<PostProps> = ({ post }) => {
  const dispatch = useAppDispatch();
  const likesSlice = useAppSelector(selectLikes);
  const [liked, setLiked] = useState<boolean>(false);
  const { likes } = likesSlice;
  const handleLike = () => {
    dispatch(addToLikes(post.date));
    setLiked(!liked);
  };
  useEffect(() => {
    if (likes.includes(post.date)) {
      setLiked(true);
    }
  }, [likes]);
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
      <div className='byline'>
        <time>{post.date}</time>
      </div>
      {post.explanation ? (
        <p className='line-clamp fade'>{post.explanation}</p>
      ) : null}

      <ReactionBar liked={liked} handleLike={handleLike} />
    </div>
  );
};

export default Post;
