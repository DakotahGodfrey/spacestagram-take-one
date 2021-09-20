import React from 'react';
import { IoMdHome, IoMdSearch } from 'react-icons/io';
import { ImCog } from 'react-icons/im';
import { Link } from 'react-router-dom';
const MobileNav = () => {
  return (
    <footer className='mobile-nav'>
      <Link to='/' className='btn-icon btn-nav btn-current'>
        <IoMdHome />
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
