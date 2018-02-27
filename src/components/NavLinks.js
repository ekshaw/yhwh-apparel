import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavLinks extends Component {
  render() {
    return (
      <ul>
        <li>
          <a href='http://yhwhapparel.storenvy.com/products'>Shop</a>
        </li>
        <li><NavLink to='/designs'>Designs</NavLink></li>
        <li>
          <div class="dropdown">
            <a class="dropbtn">Community Outreach</a>
            <div class="dropdown-content">
              <NavLink to='/missions'>Missionaries</NavLink>
              {/* <NavLink to='/organizations'>Organizations</NavLink> */}
            </div>
          </div>
        </li>
        <li><NavLink to='/about'>About</NavLink></li>
      </ul>
    );
  }
}

export default NavLinks;
