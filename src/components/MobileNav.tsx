import React from 'react';
import { IoMdHome, IoMdSearch } from 'react-icons/io';
import { ImCog } from 'react-icons/im';
import { AiTwotoneFire } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const MobileNav = () => {
  return (
    <footer className='mobile-nav'>
      <Link to='/' className='btn-icon btn-nav btn-current'>
        <IoMdHome />
      </Link>
      <Link to='/trending' className='btn-icon btn-nav'>
        <AiTwotoneFire />
      </Link>
      <Link to='/search' className='btn-icon btn-nav'>
        <IoMdSearch />
      </Link>
      <Link to='/settings' className='btn-icon btn-nav'>
        <ImCog />
      </Link>
    </footer>
  );
};

export default MobileNav;
