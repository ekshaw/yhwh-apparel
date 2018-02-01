import React from 'react';
import NavLinks from './NavLinks';
import MobileNav from './MobileNav';

const Nav = ({ logo }) => {
  return (
    <div className="nav-container">
      <div className="nav">
        <div className='nav__links'>
          <NavLinks />
        </div>
        <div className='nav__logo'>
          <a href='/'>
            <img src={logo} alt='' />
          </a>
        </div>
        <div className='nav__links nav__links--hidden'>
          <NavLinks />
        </div>
      </div>

      <MobileNav logo={logo} />
    </div>
  );
}

export default Nav;
