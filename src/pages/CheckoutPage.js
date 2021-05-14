import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import MobileFooter from '../components/MobileFooter';

import '../styles/CheckoutPage.css';
import Products from '../content/Products';
import Cookies from 'universal-cookie';
import { EventEmitter } from '../utils/EventEmitter';
import { useMediaQuery } from 'react-responsive';

import { PayPalScriptProvider, PayPalButtons, FUNDING } from '@paypal/react-paypal-js';

const CheckoutPage = props => {
  const cookies = new Cookies();
  const cookieName = 'yhwhapparel_shoppingbag';

  const [cookie, setCookie] = useState({});
  const [cartTotal, setCartTotal] = useState(0);
  const [promoCode, setPromoCode] = useState('');
  const [shipCost, setShipCost] = useState(0);

  // test start
  const [orderID, setOrderID] = useState(false);

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              value: cartTotal
            }
          }
        ]
      })
      .then(orderID => {
        setOrderID(orderID);
        return orderID;
      });
  }

  // test end

  const onPromoChangeHandler = event => {
    setPromoCode(event.target.value);
  };

  const onShipChange = ship => {
    setShipCost(ship);
  };

  useEffect(() => {
    total();
  }, [cookie]);

  useEffect(() => {
    totalAndShipAndPromo();
  }, [shipCost]);

  const total = () => {
    let totalVal = 0;
    if (cookies.get(cookieName)) {
      let cart = objectToArray(cookies.get(cookieName));
      for (let i = 0; i < cart.length; i++) {
        totalVal += cart[i].price;
      }
      setCartTotal(totalVal);
    }
  };

  const totalAndShipAndPromo = () => {
    console.log(shipCost);
    let totalVal = 0;
    if (cookies.get(cookieName)) {
      let cart = objectToArray(cookies.get(cookieName));
      for (let i = 0; i < cart.length; i++) {
        totalVal += cart[i].price;
      }
      totalVal += shipCost;
      if (promoCode == 'egg') {
        totalVal -= 5;
      }
      setCartTotal(totalVal);
    }
  };

  const removeFromCart = index => {
    let hardCopy = [...cookies.get(cookieName)];
    hardCopy.splice(index, 1);
    cookies.set(cookieName, JSON.stringify(hardCopy));
    setCookie(cookies.get(cookieName));
    EventEmitter.dispatch('updateCart', {});
  };

  const objectToArray = object => {
    return Object.keys(object).map(key => object[key]);
  };

  const getProductImage = title => {
    for (let i = 0; i < Products.length; i++) {
      if (title === Products[i].title) {
        return Products[i].images[0];
      }
    }
  };

  const cartItems = cookies.get(cookieName)
    ? objectToArray(cookies.get(cookieName)).map((el, index) => (
        <div key={index}>
          <div className='checkout-item'>
            <div className='checkout-item-img'>{getProductImage(el.title)}</div>
            <div className='checkout-item-description'>
              <div className='checkout-item-title'>
                <h4>{`${el.title}`}</h4>
              </div>
              <div className='checkout-item-price'>
                <h4>UNIT PRICE: {`$${el.price}`}</h4>
              </div>
              <div className='checkout-item-size'>
                <h4>SIZE: {`${el.size}`}</h4>
              </div>
            </div>
            <div className='checkout-item-delete'>
              <img
                src={require('../images/shop/x-button.png')}
                onClick={() => removeFromCart(index)}></img>
            </div>
          </div>
        </div>
      ))
    : null;

  return (
    <div className='checkout-main-container'>
      <div className='checkout-shopping-bag-container'>
        <div className='checkout-shopping-bag-title'>
          <h1>Shopping Bag.</h1>
        </div>
        <div className='checkout-container'>
          <div className='checkout-items-list'>{cartItems}</div>
          <div className='checkout-summary'>
            <div className='checkout-summary-title'>
              <h2>Cart Total</h2>
            </div>
            {/* <div className='checkout-summary-note'>
              <div className='checkout-summary-note-title'>
                <h4>NOTE FOR YHWH</h4>
              </div>
              <div className='checkout-summary-note-description'>
                <h5>Add a note or special instructions:</h5>
              </div>
              <div className='checkout-summary-note-textbox'>
                <textarea />
              </div>
            </div> */}
            <div className='checkout-shipping-info-container'>
              <h4>SHIPPING METHOD</h4>
              <div className='checkout-shipping-options'>
                <div className='checkout-shipping-option'>
                  <input
                    type='radio'
                    name='shipping-option'
                    value={shipCost}
                    className='shipping-option'
                    onClick={() => onShipChange(0)}
                    autofocus='true'
                  />
                  <h3>PICK UP (BERKELEY) - $0.00</h3>
                </div>
                <div className='checkout-shipping-option'>
                  <input
                    type='radio'
                    name='shipping-option'
                    value={shipCost}
                    className='shipping-option'
                    onClick={() => onShipChange(0)}
                  />
                  <h3>STICKER SHIPPING (WITHIN THE UNITED STATES) - $0.00</h3>
                </div>
                <div className='checkout-shipping-option'>
                  <input
                    type='radio'
                    name='shipping-option'
                    value={shipCost}
                    className='shipping-option'
                    onClick={() => onShipChange(5)}
                  />
                  <h3>OTHER PRODUCTS (WITHIN THE UNITED STATES) - $5.00</h3>
                </div>
              </div>
            </div>

            <div className='checkout-summary-promo'>
              <div className='checkout-summary-promo-title'>
                <h4>PROMO CODE</h4>
              </div>
              <div className='checkout-summary-promo-description'>
                <h5>Enter your promo code:</h5>
              </div>
              <div className='checkout-summary-promo-container'>
                <div className='checkout-summary-promo-textbox'>
                  <textarea onChange={onPromoChangeHandler} value={promoCode} />
                </div>
                <div className='checkout-summary-promo-btn' onClick={totalAndShipAndPromo}>
                  <h4>ADD</h4>
                </div>
              </div>
            </div>

            <div className='checkout-summary-subtotal'>
              <h4>SUBTOTAL:</h4>
              <h3>${cartTotal}.00</h3>
            </div>
            <div className='checkout-summary-button'>
              <PayPalScriptProvider
                options={{
                  'client-id':
                    'AWwmVffctp4aHr2gRBGWxDtHzF5Trw6HM_DF9_WmWKHb7hm_hYSUrg-diWc_Nd4QMDRG6BWukdhgLEFF'
                }}>
                <PayPalButtons
                  fundingSource={FUNDING.PAYPAL}
                  style={{ size: 'responsive' }}
                  createOrder={createOrder}
                  forceReRender={[cartTotal]}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
      </div>
      <div>
        {useMediaQuery({
          query: '(min-device-width: 481px)'
        }) && (
          <>
            <Footer color='#eae7e1' />
          </>
        )}

        {useMediaQuery({ query: '(max-width: 480px)' }) && (
          <>
            <MobileFooter color='#eae7e1' />
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
