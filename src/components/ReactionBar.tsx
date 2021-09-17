import React from 'react';
import { AiOutlineHeart, AiOutlineDislike } from 'react-icons/ai';
import { IoShareSocialSharp } from 'react-icons/io5';

const ReactionBar = () => {
  return (
    <div className='reaction-bar'>
      <button className='btn-icon btn-heart'>
        <AiOutlineHeart />
      </button>
      <button className='btn-icon'>
        <IoShareSocialSharp />
      </button>
      <button className='btn-icon'>
        <AiOutlineDislike />
      </button>
    </div>
  );
};

export default ReactionBar;
