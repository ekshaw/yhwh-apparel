import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = props => {
  return (
    <div className='navbar-container'>
      <div className='logo'>
        <Link to='/'>
          <img src={require('../images/logo.png')} alt='Logo' id='logo-image' />
        </Link>
      </div>
      <div className='navlinks'>
        <ul>
          <li>
            <Link to='/about'>
              <div className='navlink'>ABOUT YHWH</div>
            </Link>
          </li>
          <li>
            <Link to='/staff'>
              <div className='navlink'>OUR TEAM</div>
            </Link>
          </li>
          <li>
            <Link to='/designs'>
              <div className='navlink'>DESIGNS</div>
            </Link>
          </li>
          <li>
            {/* <Link to='/shop'>
              <div className='navlink'>SHOP</div>
            </Link> */}
            <a href='https://yhwhapparel.storenvy.com/products'>
              <div className='navlink'>SHOP</div>
            </a>
          </li>
          <li>
            <Link to='/partnerships'>
              <div className='navlink'>PARTNERSHIPS</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
