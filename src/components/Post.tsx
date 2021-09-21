import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactionBar } from '.';
import { useAppDispatch, useAppSelector } from '../app';
import { addToLikes, selectLikes } from '../app/slices/likes';
import { selectSettings } from '../app/slices/settings';
import { PostObject } from '../types';
interface PostProps {
  post: PostObject;
  detailed?: boolean;
}
const Post: React.FC<PostProps> = ({ post, detailed }) => {
  const dispatch = useAppDispatch();
  const likesSlice = useAppSelector(selectLikes);
  const settingsSlice = useAppSelector(selectSettings);
  const [liked, setLiked] = useState<boolean>(false);
  const { likes } = likesSlice;
  const { useHDSetting } = settingsSlice;
  const handleLike = () => {
    dispatch(addToLikes(post.date));
    setLiked(!liked);
  };
  useEffect(() => {
    if (likes.includes(post.date)) {
      setLiked(true);
    }
  }, [likes, post.date]);
  return (
    <div className='post'>
      {post.media_type === 'image' ? (
        <figure>
          <img
            src={useHDSetting ? post.hdurl : post.url}
            alt='placeholder post'
          />
        </figure>
      ) : (
        <figure>
          <iframe title={post.title} src={post.url}></iframe>
        </figure>
      )}
      <Link to={`post/${post.date}`}>
        <h2>{post.title}</h2>
      </Link>
      <div className='byline'>
        <time>{post.date}</time>
      </div>
      {post.explanation ? (
        <Link to={`post/${post.date}`}>
          <p className={!detailed ? 'line-clamp fade' : ''}>
            {post.explanation}
          </p>
        </Link>
      ) : null}

      <ReactionBar liked={liked} handleLike={handleLike} date={post.date} />
    </div>
  );
};

export default Post;
