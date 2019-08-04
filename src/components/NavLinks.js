import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavLinks extends Component {
  render() {
    return (
      <ul>
        <li>
          <a
            class='navlink'
            href='http://yhwhapparel.storenvy.com/products'
            // target='_blank'
          >
            Shop
          </a>
        </li>
        <li>
          <NavLink class='navlink' to='/designs'>
            Designs
          </NavLink>
        </li>
        <li>
          <div class='dropdown'>
            <p class='dropbtn'>Community Outreach</p>
            <div class='dropdown-content'>
              <NavLink class='navlink' to='/missions'>
                Missionaries
              </NavLink>
              <NavLink class='navlink' to='/organizations'>
                Organizations
              </NavLink>
            </div>
          </div>
        </li>
        <li>
          <div class='dropdown'>
            <p class='dropbtn'>About Us</p>
            <div class='dropdown-content'>
              <NavLink class='navlink' to='/about'>
                Mission & Vision
              </NavLink>
              <NavLink class='navlink' to='/newsletter'>
                Newsletter
              </NavLink>
              <NavLink class='navlink' to='/staff'>
                Staff
              </NavLink>
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

export default NavLinks;
