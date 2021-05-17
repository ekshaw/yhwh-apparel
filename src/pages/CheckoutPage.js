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

  const [promoCodeList, setPromoCodeList] = useState([
    'AnFt6r5EcB',
    'CLDJoFT7Cv',
    'PJcZsfN3hT',
    'KwPcuwe3cU',
    'M6nCVQAn48',
    'COSF2CLbMK'
  ]);
  const [cookie, setCookie] = useState({});
  const [cartTotal, setCartTotal] = useState(0);
  const [promoCode, setPromoCode] = useState('');
  const [shipCost, setShipCost] = useState(-1);
  const [isDisabled, setIsDisabled] = useState(true);
  const [orderID, setOrderID] = useState(false);

  // paypal order
  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            description: objectToString(cookies.get(cookieName)),
            amount: {
              value: cartTotal,
              details: {
                subtotal: cartTotal - shipCost,
                tax: '0.00',
                shipping: shipCost
              }
            },
            note_to_payer: 'Contact us for any questions on your order at yhwhapparel@gmail.com.'
          }
        ]
      })
      .then(orderID => {
        setOrderID(orderID);
        return orderID;
      });
  }

  // on paypal order approval
  function onApproveHandler(data, actions) {
    return actions.order.capture().then(function (details) {
      alert(
        'Transaction completed by ' +
          details.payer.name.given_name +
          '! A Paypal confirmation receipt will be sent to your email.'
      );
      cookies.set(cookieName, []);
      window.location = '/';
    });
  }

  // on paypal order error
  function onErrorHandler(err) {
    alert('Something went wrong! Try again?');
  }

  // updates promo code value
  const onPromoChangeHandler = event => {
    setPromoCode(event.target.value);
  };

  // sets shipping cost
  const onShipChange = ship => {
    setShipCost(ship);
  };

  // disables and enables paypal btn
  const onTotalChange = () => {
    if (shipCost > 0) {
      setIsDisabled(false);
    } else if (shipCost == 0) {
      checkBagItems();
    } else {
      setIsDisabled(true);
    }
  };

  // recalculates total when shipping option changes or when when item is added/removed
  useEffect(() => {
    total();
    onTotalChange();
  }, [shipCost, cookie]);

  //calculates subtotal, ship, and promo code
  const total = () => {
    let totalVal = 0;
    if (cookies.get(cookieName)) {
      let cart = objectToArray(cookies.get(cookieName));
      for (let i = 0; i < cart.length; i++) {
        totalVal += cart[i].price;
      }
    }
    if (shipCost >= 0) {
      totalVal += shipCost;
    }
    if (promoCodeList.includes(promoCode)) {
      if (totalVal <= 5) {
        totalVal = 0;
      } else {
        totalVal -= 5;
      }
    }
    setCartTotal(totalVal);
  };

  // checks if only stickers/pins if choosing free shippping
  const checkBagItems = () => {
    if (cookies.get(cookieName)) {
      let cart = objectToArray(cookies.get(cookieName));
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].productType == 'PIN' || cart[i].productType == 'STICKER') {
          continue;
        } else {
          setIsDisabled(true);
          return;
        }
      }
      setIsDisabled(false);
    }
  };

  // removes item from cart
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

  const objectToString = object => {
    let totalItems = '';
    let cart = objectToArray(cookies.get(cookieName));
    for (let i = 0; i < cart.length; i++) {
      totalItems += cart[i].title + ': size ' + cart[i].size + '. ';
    }
    if (promoCodeList.includes(promoCode)) {
      totalItems += 'Promo code used: ' + promoCode + '.';
    }
    return totalItems;
  };

  const getProductImage = title => {
    for (let i = 0; i < Products.length; i++) {
      if (title === Products[i].title) {
        return Products[i].images[0];
      }
    }
  };

  const getProductId = title => {
    for (let i = 0; i < Products.length; i++) {
      if (title === Products[i].title) {
        return Products[i].productId;
      }
    }
  };

  const cartItems = cookies.get(cookieName)
    ? objectToArray(cookies.get(cookieName)).map((el, index) => (
        <div key={index}>
          <div className='checkout-item'>
            <a href={`/product?product=${getProductId(el.title)}`} className='checkout-img-link'>
              <div className='checkout-item-img'>{getProductImage(el.title)}</div>
            </a>
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
              <div className='checkout-shipping-info-description'>
                <h5>Choose your shipping method:</h5>
                <h5>*Processing Time: 3-5 business days. Shipping Time: 7-10 business days.</h5>
              </div>
              <div className='checkout-shipping-options'>
                <div className='checkout-shipping-option'>
                  <input
                    type='radio'
                    name='shipping-option'
                    value={shipCost}
                    className='shipping-option'
                    onClick={() => onShipChange(0)}
                  />
                  <h3>STICKER/PIN SHIPPING ONLY (WITHIN THE US) - $0.00</h3>
                </div>
                <div className='checkout-shipping-option'>
                  <input
                    type='radio'
                    name='shipping-option'
                    value={shipCost}
                    className='shipping-option'
                    onClick={() => onShipChange(5)}
                  />
                  <h3>OTHER PRODUCTS (WITHIN THE US) - $5.00</h3>
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
                <div className='checkout-summary-promo-btn' onClick={total}>
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
                  forceReRender={[cartTotal, shipCost, isDisabled]}
                  disabled={isDisabled}
                  onApprove={onApproveHandler}
                  onError={onErrorHandler}
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
