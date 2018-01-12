import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import yhwhLogo from '../yhwh-logo.png';

class Nav extends Component {

  render() {
    const navLinks = (
      <ul>
        <li><NavLink to='/shop'>Shop</NavLink></li>
        <li><NavLink to='/designs'>Designs</NavLink></li>
        <li><NavLink to='/community_outreach'>Community Outreach</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    );
    return (
      <div className="nav">
        <div className='nav__links'>
          {navLinks}
        </div>
        <div className='nav__logo'>
          <img src={yhwhLogo} alt='' />
        </div>
        <div className='nav__links nav__links--hidden'>
          {navLinks}
        </div>
      </div>
    );
  }
}

export default Nav;
