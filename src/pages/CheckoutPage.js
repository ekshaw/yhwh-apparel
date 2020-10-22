import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import '../styles/CheckoutPage.css';

const CheckoutPage = (props) => {
  return (
    <div className='checkout-main-container'>
      <div className='checkout-shopping-bag-container'>
        <div className='checkout-shopping-bag-title'>
          <h1>Shopping Bag.</h1>
        </div>
        <div className='checkout-container'>
          <div className='checkout-items-list-container'>
            <div className='checkout-items-list'>
              <div className='checkout-item'>
                <div className='checkout-item-img'>
                  <img src={require('../images/designs/adonai.jpg')}></img>
                </div>
                <div className='checkout-item-description'>
                  <div className='checkout-item-title'>
                    <h4>ADONAI</h4>
                  </div>
                  <div className='checkout-item-type'>
                    <h4>TYPE: HOODIE</h4>
                  </div>
                  <div className='checkout-item-size'>
                    <h4>SIZE: M</h4>
                  </div>
                  <div className='checkout-item-price'>
                    <h4>UNIT PRICE: $25</h4>
                  </div>
                  <div className='checkout-item-qty'>
                    <h4>QTY: 2</h4>
                  </div>
                </div>
                <div className='checkout-item-delete'>
                  <img src={require('../images/shop/x-button.png')}></img>
                </div>
              </div>
              <div className='checkout-item'>
                <div className='checkout-item-img'>
                  <img src={require('../images/designs/adonai.jpg')}></img>
                </div>
                <div className='checkout-item-description'>
                  <div className='checkout-item-title'>
                    <h4>ADONAI</h4>
                  </div>
                  <div className='checkout-item-type'>
                    <h4>TYPE: HOODIE</h4>
                  </div>
                  <div className='checkout-item-size'>
                    <h4>SIZE: M</h4>
                  </div>
                  <div className='checkout-item-price'>
                    <h4>UNIT PRICE: $25</h4>
                  </div>
                  <div className='checkout-item-qty'>
                    <h4>QTY: 2</h4>
                  </div>
                </div>
                <div className='checkout-item-delete'>
                  <img src={require('../images/shop/x-button.png')}></img>
                </div>
              </div>
            </div>
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
                <h3>$100.00</h3>
                <h5>Shipping and tax calculated at checkout.</h5>
              </div>
              <div className='checkout-summary-button'>
                <h4>PROCEED TO CHECKOUT</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='checkout-payment-container'>
        <div className='checkout-title'>
          <h1>Checkout.</h1>
        </div>
        <div className='checkout-shipping-info-container'>
          <div className='checkout-shipping-info-title'>
            <h3>SHIPPING</h3>
          </div>
          <div className='checkout-shipping-info-address-title'>
            <h3>Shipping Address</h3>
          </div>
          <div className='checkout-shipping-info-form'>
            <div className='checkout-shipping-info-col1'>
              <div className='shipping-first-name'>
                <h3>FIRST NAME:</h3>
                <input />
              </div>
              <div className='shipping-address1'>
                <h3>ADDRESS LINE 1:</h3>
                <input />
              </div>
              <div className='shipping-city'>
                <h3>CITY:</h3>
                <input />
              </div>
            </div>
            <div className='checkout-shipping-info-col2'>
              <div className='shipping-last-name'>
                <h3>LAST NAME:</h3>
                <input />
              </div>
              <div className='shipping-address2'>
                <h3>ADDRESS LINE 2:</h3>
                <input />
              </div>
              <div className='shipping-state-and-zip-container'>
                <div className='shipping-state'>
                  <h3>STATE:</h3>
                  <input />
                </div>
                <div className='shipping-zip'>
                  <h3>ZIP CODE:</h3>
                  <input />
                </div>
              </div>
            </div>
          </div>
          <div className='checkout-shipping-info-method'>
            <h3>Shipping Method</h3>
            <div className='checkout-shipping-options'>
              <div className='checkout-shipping-option'>
                <input
                  type='radio'
                  name='shipping-option'
                  value=''
                  className='shipping-option'
                />
                <h3>PICK UP AT MONTHLY CAMPUS SALE (BERKELEY) - $0.00</h3>
              </div>
              <div className='checkout-shipping-option'>
                <input
                  type='radio'
                  name='shipping-option'
                  value=''
                  className='shipping-option'
                />
                <h3>WITHIN CALIFORNIA - $5.00</h3>
              </div>
              <div className='checkout-shipping-option'>
                <input
                  type='radio'
                  name='shipping-option'
                  value=''
                  className='shipping-option'
                />
                <h3>WITHIN THE UNITED STATES - $10.00</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='checkout-billing-info-container'>
          <div className='checkout-billing-info-title'>
            <h3>BILLING</h3>
          </div>
          <div className='checkout-billing-info-address-title'>
            <h3>Billing Address</h3>
          </div>
          <div className='checkout-billing-info-form'>
            <div className='checkout-billing-info-col1'>
              <div className='billing-first-name'>
                <h3>FIRST NAME:</h3>
                <input />
              </div>
              <div className='billing-address1'>
                <h3>ADDRESS LINE 1:</h3>
                <input />
              </div>
              <div className='billing-city'>
                <h3>CITY:</h3>
                <input />
              </div>
            </div>
            <div className='checkout-billing-info-col2'>
              <div className='billing-last-name'>
                <h3>LAST NAME:</h3>
                <input />
              </div>
              <div className='billing-address2'>
                <h3>ADDRESS LINE 2:</h3>
                <input />
              </div>
              <div className='billing-state-and-zip-container'>
                <div className='billing-state'>
                  <h3>STATE:</h3>
                  <input />
                </div>
                <div className='billing-zip'>
                  <h3>ZIP CODE:</h3>
                  <input />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='checkout-payment-order-summary-container'>
          <div className='checkout-payment-info-container'>
            <div className='checkout-payment-info-title'>
              <h3>PAYMENT METHOD</h3>
            </div>
            <div className='checkout-payment-info-form'>
              <div className='checkout-payment-info'>
                <div className='payment-first-name'>
                  <h3>FIRST NAME:</h3>
                  <input />
                </div>
                <div className='payment-last-name'>
                  <h3>LAST NAME:</h3>
                  <input />
                </div>
                <div className='payment-card-number'>
                  <h3>CARD NUMBER:</h3>
                  <input />
                </div>
                <div className='payment-exp-cvv-container'>
                  <div className='payment-exp-date'>
                    <h3>EXPIRATION DATE:</h3>
                    <input />
                  </div>
                  <div className='payment-cvv'>
                    <h3>CVV:</h3>
                    <input />
                  </div>
                </div>
                <div className='checkout-complete-purchase-button'>
                  <h4>COMPLETE PURCHASE</h4>
                </div>
              </div>
              <div className='checkout-payment-info'>
              <div className='checkout-order-summary'>
                <div className='checkout-order-summary-title'>
                  <h2>Your Order</h2>
                </div>
                <div className='checkout-order-summary-discount-code-container'>
                  <div className='checkout-order-summary-discount-code-title'>
                    <h4>DISCOUNT CODE:</h4>
                  </div>
                  <div className='checkout-order-summary-discount-code'>
                    <input />
                    <div className='checkout-order-discount-code-add-button'>
                      <h4>ADD</h4>
                    </div>
                  </div>
                </div>
                <div className='checkout-order-summary-details'>
                  <div className='checkout-order-summary-detail' id='order-val'><h4>ORDER VALUE</h4><h4>$76.00</h4></div>
                  <div className='checkout-order-summary-detail' id='shipping'><h4>SHIPPING</h4><h4>$5.00</h4></div>
                  <div className='checkout-order-summary-detail' id='tax'><h4>TAX</h4><h4>$7.00</h4></div>
                </div>
                <div className='checkout-order-summary-total'>
                  <h4><b>TOTAL:</b></h4>
                  <h3>$88.00</h3>
                </div>
              </div>
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
