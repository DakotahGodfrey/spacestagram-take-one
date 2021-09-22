import React, { useState } from 'react';
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
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const handleShare = () => {
    setShowNotification(true);
    navigator.clipboard.writeText(`${window.location.href}post/${date}`);
    setTimeout(() => {
      setShowNotification(false);
      console.log('timeout');
    }, 1000);
  };
  return (
    <div className='reaction-bar'>
      <button className='btn-icon btn-heart' onClick={() => handleLike()}>
        {liked ? (
          <i className='filled'>
            <AiFillHeart />
          </i>
        ) : (
          <AiOutlineHeart />
        )}
      </button>
      <button className='btn-icon btn-share' onClick={() => handleShare()}>
        <IoShareSocialSharp />
      </button>
      {showNotification && (
        <div className='notification'>Link Copied to Clipboard</div>
      )}
    </div>
  );
};

export default ReactionBar;
