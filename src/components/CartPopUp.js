import React, { useState } from 'react';
import '../styles/CartPopUp.css';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Products from '../content/Products';
const CartPopUp = props => {
  const cookies = new Cookies();
  const cookieName = 'yhwhapparel_shoppingbag';

  const objectToArray = object => {
    return Object.keys(object).map(key => object[key]);
  };

  let bagNum = cookies.get(cookieName) ? objectToArray(cookies.get(cookieName)).length : 0;

  const getProductImage = title => {
    for (let i = 0; i < Products.length; i++) {
      if (title === Products[i].title) {
        return Products[i].images[0];
      }
    }
  };

  const getProductPrice = title => {
    for (let i = 0; i < Products.length; i++) {
      if (title === Products[i].title) {
        return Products[i].price;
      }
    }
  };

  return (
    <div className='cart-pop-up-main-container'>
      <div className='cart-pop-up-items-holder'>
        <div className='cart-pop-up-text'>
          <div className='cart-pop-up-top-container'>
            <div className='cart-pop-up-heading'>
              <h1>Added to Cart.</h1>
            </div>
            <div className='cart-pop-up-exit-btn' onClick={props.hideCartClick}>
              <h3>x</h3>
            </div>
          </div>
          <div className='cart-pop-up-item'>
            <div className='cart-pop-up-item-img'>{getProductImage(props.title)}</div>
            <div className='cart-pop-up-right-container'>
              <div className='cart-pop-up-item-description'>
                <div className='cart-pop-up-item-title'>{`${props.title}`}</div>
                <div className='cart-pop-up-item-price'>
                  UNIT PRICE: {`$${getProductPrice(props.title)}`}
                </div>
                <div className='cart-pop-up-item-size'>SIZE: {`${props.size}`}</div>
              </div>
              <div className='cart-pop-up-checkout-btn'>
                <Link to='/checkout' onClick={props.hideCartClick}>
                  <h4>CART ({bagNum})</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopUp;
