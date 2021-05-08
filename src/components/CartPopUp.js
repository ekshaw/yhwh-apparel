import React, { Component, useState, useEffect } from 'react';
import '../styles/CartPopUp.css';
import Cookies from 'universal-cookie';
import Products from '../content/Products';

const CartPopUp = props => {
    const cookies = new Cookies();
    const cookieName = 'yhwhapparel_shoppingbag';

    const objectToArray = (object) => {
        if (object != null) {
            return Object.keys(object).map((key) => object[key]);
        }
    };

    let bagNum = cookies.get(cookieName)
        ? objectToArray(cookies.get(cookieName)).length
        : 0;
        
    const [cookie, setCookie] = useState({});
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
    total();
    }, [cookie]);

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

    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
    });

    const getProductImage = (title) => {
    for (let i = 0; i < Products.length; i++) {
        if (title === Products[i].title) {
        return Products[i].images[0];
        }
    }
    };

    let cart = objectToArray(cookies.get(cookieName));

    if (props.hidden) {
        return null;
    }
    return (
        // + (this.state.popUpHidden ? ' cart-hide' : ' cart-show')}
            <div className='cart-pop-up-container' >
                <div className='cart-pop-up-overlay' onClick={props.hidePopUp}></div>
                <div className='cart-pop-up-content-container'>
                    <div className='cart-pop-up-overlay-exit-btn' onClick={props.hidePopUp}>
                        X
                    </div>
                    <div className='cart-pop-up-overlay-header'>ADDED TO BAG</div>
                    <div className='cart-pop-up-overlay-header-underline'></div>
                    <div className='cart-pop-up-current-item'>
                        {/* {cartItem} */}
                        {/* <div key={index}> */}
                            <div className='cart-pop-up-item'>
                                {/*el.title */}
                                <div className='cart-pop-up-item-img'>{getProductImage(cart[bagNum-1].title)}</div> 
                                <div className='cart-pop-up-item-description'>
                                    <div className='cart-pop-up-item-title'>
                                        {/*el.title */}
                                    {`${cart[bagNum-1].title}`}
                                    </div>
                                    <div className='cart-pop-up-item-price'>
                                        {/*el.price */}
                                    UNIT PRICE: {`$${cart[bagNum-1].price}`}
                                    </div>
                                    <div className='cart-pop-up-item-size'>
                                        {/*el.size */}
                                    SIZE: {`${cart[bagNum-1].size}`}
                                    </div>
                                </div>
                                {/* <div className='cart-pop-up-item-delete'>
                                    <img
                                    src={require('../images/shop/x-button.png')}
                                    onClick={() => removeFromCart(index)}
                                    ></img>
                                </div> */}
                            </div>
                        </div>
                    {/* </div> */}
                    <div className='cart-pop-up-overlay-bag-btn'>
                        <a href='http://localhost:3000/checkout'>VIEW BAG ({bagNum})</a>
                    </div>
                </div>
            </div>
    );
  };

export default CartPopUp;

