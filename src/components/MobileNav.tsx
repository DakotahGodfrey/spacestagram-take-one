import React from 'react';
import { IoMdHome, IoMdSearch } from 'react-icons/io';
import { ImCog } from 'react-icons/im';
import { NavLink } from 'react-router-dom';

const MobileNav: React.FC = () => {
  return (
    <footer className='mobile-nav'>
      <NavLink
        to='/'
        exact
        className='btn-icon btn-nav'
        activeClassName='btn-current'
      >
        <IoMdHome />
      </NavLink>
      <NavLink
        to='/search'
        className='btn-icon btn-nav'
        activeClassName='btn-current'
      >
        <IoMdSearch />
      </NavLink>
      <NavLink
        to='/settings'
        className='btn-icon btn-nav'
        activeClassName='btn-current'
      >
        <ImCog />
      </NavLink>
    </footer>
  );
};

export default MobileNav;
