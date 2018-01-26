import React, { Component } from 'react';
import NavLinks from './NavLinks';
import MobileNav from './MobileNav';

class Nav extends Component {

  render() {
    return (
      <div className="nav-container">
        <div className="nav">
          <div className='nav__links'>
            <NavLinks />
          </div>
          <div className='nav__logo'>
            <a href='/'>
              <img src={this.props.logo} alt='' />
            </a>
          </div>
          <div className='nav__links nav__links--hidden'>
            <NavLinks />
          </div>
        </div>

        <MobileNav logo={this.props.logo} />
      </div>
    );
  }
}

export default Nav;
