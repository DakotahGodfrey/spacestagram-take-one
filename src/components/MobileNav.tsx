import React from 'react';
import { IoMdHome, IoMdSearch } from 'react-icons/io';
import { ImCog } from 'react-icons/im';
import { AiTwotoneFire } from 'react-icons/ai';
const MobileNav = () => {
  return (
    <footer className='mobile-nav'>
      <button className='btn-icon btn-nav btn-current'>
        <IoMdHome />
      </button>
      <button className='btn-icon btn-nav'>
        <AiTwotoneFire />
      </button>
      <button className='btn-icon btn-nav'>
        <IoMdSearch />
      </button>
      <button className='btn-icon btn-nav'>
        <ImCog />
      </button>
    </footer>
  );
};

export default MobileNav;
