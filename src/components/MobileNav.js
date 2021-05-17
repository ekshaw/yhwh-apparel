import React, { useState } from 'react';
import '../styles/MobileNav.css';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { EventEmitter } from '../utils/EventEmitter';

const MobileNav = props => {
  // constructor(props) {
  //   super(props);
  //   = {
  //     hide_menu: true,
  //     background_index: 0,
  //     curr_background: ['', '#d3cec7']
  //   };
  // }

  const cookies = new Cookies();
  const cookieName = 'yhwhapparel_shoppingbag';

  const [hide_menu, setHideMenu] = useState(true);
  const [background_index, setBackgroundIndex] = useState(0);
  const [curr_background, setBackground] = useState(['', '#d3cec7']);

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
  const click = () => {
    setHideMenu(!hide_menu);
    setBackgroundIndex((background_index + 1) % 2);
  };

  const onLogoClick = () => {
    setHideMenu(true);
    setBackgroundIndex(0);
  };

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
    <div>
      <div className='mobile-logo'>
        <Link to='/' onClick={() => onLogoClick()}>
          <img src={require('../images/logo.png')} alt='Logo' id='logo-image' />
        </Link>
      </div>
      <div
        onClick={() => click()}
        className={'hamburger-icon' + (hide_menu ? '' : ' fixed')}
        id='menu-toggle'>
        <input type='checkbox' checked={!hide_menu} />
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        id='menubar'
        className={hide_menu ? 'hide' : 'show'}
        style={{
          backgroundColor: curr_background[background_index]
        }}>
        <div className='menu-items-holder'>
          <div id='myDropdown' className={'menubar-text' + (hide_menu ? ' hide' : ' show')}>
            <Link to='/' className='menubar-text' onClick={() => click()}>
              <h4>HOME</h4>
            </Link>
            <Link to='/about' className='menubar-text' onClick={() => click()}>
              <h4>ABOUT YHWH</h4>
            </Link>
            <Link to='/staff' className='menubar-text' onClick={() => click()}>
              <h4>OUR TEAM</h4>
            </Link>
            <Link to='/designs' className='menubar-text' onClick={() => click()}>
              <h4>DESIGNS</h4>
            </Link>
            <Link to='/shop' className='menubar-text' onClick={() => click()}>
              <h4>SHOP</h4>
            </Link>
            {/* <a href='https://yhwhapparel.storenvy.com/products' className='menubar-text'>
                <h4 className='mobile-navlink'>SHOP</h4>
              </a> */}
            <Link to='/partnerships' className='menubar-text' onClick={() => click()}>
              <h4>PARTNERSHIPS</h4>
            </Link>
          </div>
        </div>
      </div>
      <div className='mobile-bag'>
        <Link to='/checkout'>
          <div className='mobile-bag-image'>
            <img src={require('../images/shop/shopping_bag.png')} />
          </div>
          <div className={'mobile-bag-num-background ' + (cartSize == 0 ? 'empty' : 'items')}>
            <div className='mobile-bag-num'>{cartSize == 0 ? '' : cartSize}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
