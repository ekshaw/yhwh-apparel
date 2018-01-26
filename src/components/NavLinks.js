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
        <li><NavLink to='/community-outreach'>Community Outreach</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
      </ul>
    );
  }
}

export default NavLinks;
