import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoShareSocialSharp } from 'react-icons/io5';
interface ReactionBarProps {
  liked: boolean;
  date: string;
  handleLike: () => void;
}
const ReactionBar: React.FC<ReactionBarProps> = ({
  liked,
  handleLike,
  date,
}) => {
  return (
    <div className='reaction-bar'>
      <button className='btn-icon btn-heart' onClick={() => handleLike()}>
        {liked ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
      <button
        className='btn-icon btn-share'
        onClick={() =>
          navigator.clipboard.writeText(`${window.location.href}post/${date}`)
        }
      >
        <IoShareSocialSharp />
      </button>
    </div>
  );
};

export default ReactionBar;
