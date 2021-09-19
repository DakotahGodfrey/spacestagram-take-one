import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
const MobileHeader = () => {
  return (
    <header className='mobile-header'>
      <Link to='/'>
        <Logo />
      </Link>
    </header>
  );
};

export default MobileHeader;
