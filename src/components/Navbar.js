import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Cookies from 'universal-cookie';
import { EventEmitter } from '../utils/EventEmitter';

const Navbar = props => {
  const cookies = new Cookies();
  const cookieName = 'yhwhapparel_shoppingbag';

  const objectToArray = object => {
    return Object.keys(object).map(key => object[key]);
  };

  let bagNum = cookies.get(cookieName) ? objectToArray(cookies.get(cookieName)).length : 0;

  const [cartSize, setCartSize] = useState(bagNum);

  const updateCart = event => {
    bagNum = cookies.get(cookieName) ? objectToArray(cookies.get(cookieName)).length : 0;
    setCartSize(bagNum);
  };

  EventEmitter.subscribe('updateCart', event => updateCart(event));

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
            <Link to='/shop'>
              <div className='navlink'>SHOP</div>
            </Link>
            {/* <a href='https://yhwhapparel.storenvy.com/products'>
              <div className='navlink'>SHOP</div>
            </a> */}
          </li>
          <li>
            <Link to='/partnerships'>
              <div className='navlink'>PARTNERSHIPS</div>
            </Link>
          </li>
        </ul>
      </div>
      <div className='bag'>
        <Link to='/checkout'>
          <div className='bag-image'>
            <img src={require('../images/shop/shopping_bag.png')} />
          </div>
          <div className={'bag-num-background ' + (cartSize == 0 ? 'empty' : 'items')}>
            <div className='bag-num'>{cartSize == 0 ? '' : cartSize}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
