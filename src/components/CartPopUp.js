import React, { useState } from 'react';
import '../styles/CartPopUp.css';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Products from '../content/Products';
const CartPopUp = props => {
  const cookies = new Cookies();
  const cookieName = 'yhwhapparel_shoppingbag';

  const [hide_menu, setHideMenu] = useState(false);
  const [background_index, setBackgroundIndex] = useState(0);
  const [curr_background, setBackground] = useState(['', '#d3cec7']);

  const click = () => {
    setHideMenu(!hide_menu);
    setBackgroundIndex((background_index + 1) % 2);
  };

  const objectToArray = object => {
    return Object.keys(object).map(key => object[key]);
  };

  let bagNum = cookies.get(cookieName) ? objectToArray(cookies.get(cookieName)).length : 0;
  let cart = objectToArray(cookies.get(cookieName));

  const getProductImage = title => {
    for (let i = 0; i < Products.length; i++) {
      if (title === Products[i].title) {
        return Products[i].images[0];
      }
    }
  };

  return (
    <div>
      <div
        onClick={() => click()}
        className={'cart-hamburger-icon' + (hide_menu ? '' : ' fixed')}
        id=''>
        <input type='checkbox' checked={!hide_menu} />
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
            <div className='cart-pop-up-item'>
              <div className='cart-pop-up-item-img'>{getProductImage(cart[bagNum - 1].title)}</div>
              <div className='cart-pop-up-item-description'>
                <div className='cart-pop-up-item-title'>{`${cart[bagNum - 1].title}`}</div>
                <div className='cart-pop-up-item-price'>
                  UNIT PRICE: {`$${cart[bagNum - 1].price}`}
                </div>
                <div className='cart-pop-up-item-size'>SIZE: {`${cart[bagNum - 1].size}`}</div>
              </div>
              <Link to='/checkout' className='checkout-cart-text' onClick={() => click()}>
                <h4>CART</h4>
                {`${bagNum}`}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopUp;
