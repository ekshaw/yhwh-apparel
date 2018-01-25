import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import yhwhLogo from '../images/yhwh-logo.png';

class Nav extends Component {

  render() {
    const navLinks = (
      <ul>
        <li>
          <a href='http://yhwhapparel.storenvy.com/products'>Shop</a>
        </li>
        <li><NavLink to='/designs'>Designs</NavLink></li>
        <li><NavLink to='/community-outreach'>Community Outreach</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
      </ul>
    );
    return (
      <div className="nav">
        <div className='nav__links'>
          {navLinks}
        </div>
        <div className='nav__logo'>
          <a href='/'>
            <img src={yhwhLogo} alt='' />
          </a>
        </div>
        <div className='nav__links nav__links--hidden'>
          {navLinks}
        </div>
      </div>
    );
  }
}

export default Nav;
