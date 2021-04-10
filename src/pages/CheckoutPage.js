import React, { Fragment, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import '../styles/CheckoutPage.css';
import Products from '../content/Products';
import Cookies from 'universal-cookie';

const CheckoutPage = props => {
  const cookies = new Cookies();
  const cookieName = 'egg';

  const [cookie, setCookie] = useState({});
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    total();
  }, [cookie]);

  const total = () => {
    let totalVal = 0;
    let cart = objectToArray(cookies.get(cookieName));
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const removeFromCart = index => {
    let hardCopy = [...cookies.get(cookieName)];
    hardCopy.splice(index, 1);
    cookies.set(cookieName, JSON.stringify(hardCopy));
    setCookie(cookies.get(cookieName));
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
            <div className='checkout-summary-note'>
              <div className='checkout-summary-note-title'>
                <h4>NOTE FOR YHWH</h4>
              </div>
              <div className='checkout-summary-note-description'>
                <h5>Add a note or special instructions:</h5>
              </div>
              <div className='checkout-summary-note-textbox'>
                <textarea />
              </div>
            </div>
            <div className='checkout-summary-subtotal'>
              <h4>SUBTOTAL:</h4>
              <h3>${cartTotal}</h3>
              <h5>Shipping and tax calculated at checkout.</h5>
            </div>
            <div className='checkout-summary-button'>
              <h4>PROCEED TO CHECKOUT</h4>
            </div>
          </div>
        </div>
      </div>

      <Footer color='#eae7e1' />
    </div>
  );
};

export default CheckoutPage;
