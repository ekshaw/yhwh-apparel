import React, { Fragment, useState, useEffect } from 'react';
import Footer from '../components/Footer';
import '../styles/CheckoutPage.css';
import Products from '../content/Products';
import { useCookies } from 'react-cookie';
import Cookies from 'universal-cookie';

const CheckoutPage = props => {
  const cookies = new Cookies();

  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  cookies.set('myBagTotal', cartTotal, { path: '/' });
  console.log(cookies.get('myBagTotal'));

  // updates total & cookie if cart changes
  useEffect(() => {
    total();
    cookies.set('myBagTotal', cartTotal, { path: '/' });
    createCookie('myBag', JSON.stringify(cart));
  }, [cart]);

  // calculates total
  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  // adds item to cart
  const addToCart = el => {
    setCart([...cart, el]);
  };

  // removes item from cart (need to figure out how to deal with duplicates!)
  const removeFromCart = el => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter(cartItem => cartItem.title !== el.title);
    setCart(hardCopy);
  };

  // list of products (can delete later once we connect addtoCart to product pages)
  const listItems = Products.map(el => (
    <div key={el.name}>
      {`${el.title}: $${el.price}`}
      <input type='submit' value='add to cart' onClick={() => addToCart(el)} />
    </div>
  ));

  // list of cart items in checkout page
  const cartItems = cart.map(el => (
    <div key={el.name}>
      <div className='checkout-item'>
        <div className='checkout-item-img'>{el.images[0]}</div>
        <div className='checkout-item-description'>
          <div className='checkout-item-title'>
            <h4>{`${el.title}`}</h4>
          </div>
          <div className='checkout-item-price'>
            <h4>UNIT PRICE: {`$${el.price}`}</h4>
          </div>
        </div>
        <div className='checkout-item-delete'>
          <img
            src={require('../images/shop/x-button.png')}
            onClick={() => removeFromCart(el)}></img>
        </div>
      </div>
    </div>
  ));

  // creates cookies (not updating?:"))
  function createCookie(name, value, days) {
    var expires;
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = ', expires=' + date.toGMTString();
    } else {
      expires = '';
    }
    console.log('>>>>>>>>>>>', value);
    document.cookie = name + '=' + value + expires + ', path=/';
  }

  function eraseCookie(name) {
    createCookie(name, '', -1);
  }

  return (
    <div className='checkout-main-container'>
      <div className='checkout-shopping-bag-container'>
        <div className='checkout-shopping-bag-title'>
          <h1>Shopping Bag.</h1>
          <div>{listItems}</div>
        </div>
        <div className='checkout-container'>
          <div className='checkout-items-list-container'>
            <div className='checkout-items-list'>{cartItems}</div>
          </div>
          <div className='checkout-summary-container'>
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
      </div>

      <Footer color='#eae7e1' />
    </div>
  );
};

export default CheckoutPage;
