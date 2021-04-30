import React, { Component, useState, useEffect } from 'react';
import '../styles/CartPopUp.css';
import Cookies from 'universal-cookie';
import Products from '../content/Products';
import { EventEmitter } from '../utils/EventEmitter';

    const CartPopUp = props => {
    const cookies = new Cookies();
    const cookieName = 'yhwhapparel_shoppingbag';

    const objectToArray = (object) => {
        return Object.keys(object).map((key) => object[key]);
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

    const removeFromCart = (index) => {
    let hardCopy = [...cookies.get(cookieName)];
    hardCopy.splice(index, 1);
    cookies.set(cookieName, JSON.stringify(hardCopy));
    setCookie(cookies.get(cookieName));
    EventEmitter.dispatch('updateCart', {});
    };

    const getProductImage = (title) => {
    for (let i = 0; i < Products.length; i++) {
        if (title === Products[i].title) {
        return Products[i].images[0];
        }
    }
    };

    let cart = objectToArray(cookies.get(cookieName));

    // const cartItem = cookies.get(cookieName)
    // ? objectToArray(cookies.get(cookieName)).map((el, index) => (
    //     <div key={index}>
    //         <div className='cart-pop-up-item'>
    //             <div className='cart-pop-up-item-img'>{getProductImage(el.title)}</div>
    //             <div className='cart-pop-up-item-description'>
    //                 <div className='cart-pop-up-item-title'>
    //                 {`${el.title}`}
    //                 </div>
    //                 <div className='cart-pop-up-item-price'>
    //                 UNIT PRICE: {`$${el.price}`}
    //                 </div>
    //                 <div className='cart-pop-up-item-size'>
    //                 SIZE: {`${el.size}`}
    //                 </div>
    //             </div>
    //             <div className='cart-pop-up-item-delete'>
    //                 <img
    //                 src={require('../images/shop/x-button.png')}
    //                 onClick={() => removeFromCart(index)}
    //                 ></img>
    //             </div>
    //         </div>
    //     </div>
    //     ))
    // : null;

    if (props.hidden) {
        console.log('legit');
        return <div></div>;
    }
    return (
        <div className='cart-pop-up-container'>
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
                <a href='http://localhost:3000/checkout'><h4>VIEW BAG ({bagNum})</h4></a>
            </div>
            </div>
      </div>
    );
  };

// class CartPopUp extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       dropOverlayHidden: false,
//     }
//   }

//   onXClick = () => {
//     this.setState({ dropOverlayHidden: true })
//   }

//   render() {
//     console.log('yote')
//     if (this.state.dropOverlayHidden) {
//       return <div></div>;
//     }
//     return (
    //   <div className='cart-pop-up-container'>
    //     <div className='cart-pop-up-overlay' onClick={this.onXClick}></div>
    //     <div className='cart-pop-up-content-container'>
    //       <img className='cart-pop-up-overlay-img' src={require('../images/home/assurance-drop.png')} />
    //       <div className='cart-pop-up-overlay-exit-btn' onClick={this.onXClick}>
    //         <h3>X</h3>
    //       </div>
    //       <div className='cart-pop-up-overlay-header'><h3>F/W '20 COLLECTION</h3></div>
    //       <div className='cart-pop-up-overlay-header-underline'></div>
    //       <div className='cart-pop-up-overlay-title'><h1>Assurance.</h1></div>
    //       <div className='cart-pop-up-overlay-order-btn'>
    //         <a href='http://localhost:3000/checkout'><h4>CHECKOUT</h4></a>
    //       </div>
    //     </div>
    //   </div>
//     );
//   }
// };

export default CartPopUp;

