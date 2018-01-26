import React, { Component } from 'react';
import NavLinks from './NavLinks';

class MobileNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNavLinks: false
    }
  }

  toggleDropdown = (e) => {
    e.preventDefault();
    this.setState({ showNavLinks: !this.state.showNavLinks });
  }

  render() {
    const navDropdownBtn = (
        <a
          href='nav-dropdown'
          onClick={this.toggleDropdown}
        >
          <i className={"fa fa-bars"}></i>
        </a>
    );

    let navDropdown = this.state.showNavLinks ? <NavLinks /> : null;

    return (
      <div className="mobile-nav-container">
        <div className="mobile-nav">
          <div className='nav__dropdown-btn'>
            {navDropdownBtn}
          </div>
          <div className='nav__logo'>
            <a href='/'>
              <img src={this.props.logo} alt='' />
            </a>
          </div>
          <div className='nav__dropdown-btn nav__dropdown-btn--hidden'>
            {navDropdownBtn}
          </div>
        </div>
        {navDropdown}
      </div>
    );
  }
}

export default MobileNav;
