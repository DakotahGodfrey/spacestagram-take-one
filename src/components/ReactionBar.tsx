import React from 'react';
import {
  AiOutlineHeart,
  AiOutlineDislike,
  AiFillHeart,
  AiFillDislike,
} from 'react-icons/ai';
import { IoShareSocialSharp } from 'react-icons/io5';
interface ReactionBarProps {
  liked: boolean;
  handleLike: () => void;
}
const ReactionBar: React.FC<ReactionBarProps> = ({ liked, handleLike }) => {
  return (
    <div className='reaction-bar'>
      <button className='btn-icon btn-heart' onClick={() => handleLike()}>
        {liked ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
      <button className='btn-icon btn-share'>
        <IoShareSocialSharp />
      </button>
    </div>
  );
};

export default ReactionBar;
