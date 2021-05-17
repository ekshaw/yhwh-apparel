import React, { Fragment } from 'react';
import '../../styles/desktop/ProductPageDesktop.css';
import Products from '../../content/Products';
import ProductImageCarousel from '../../components/ProductImageCarousel';
import Footer from '../../components/Footer';
import { Component } from 'react';
import SizeButtons from '../../components/SizeButtons';
import ProductDescription from '../../components/ProductDescription';
import CartPopUp from '../../components/CartPopUp';
import queryString from 'query-string';
import Cookies from 'universal-cookie';
import { EventEmitter } from '../../utils/EventEmitter';

class ProductPageDesktop extends Component {
  constructor(props) {
    super(props);
    this.cookies = new Cookies();
    this.cookieName = 'yhwhapparel_shoppingbag';
    this.state = {
      productNum: 0,
      products: Products,
      numProducts: Products.length,
      productDescriptionHidden: true,
      size: '',
      showFlashMsg: false,
      flashMsgTxt: 'Please select a size!',
      hideCart: false
    };
  }

  componentWillMount() {
    const query = queryString.parse(this.props.location);
    var productIndex;
    for (let index = 0; index < Products.length; index++) {
      if (query.product === Products[index].productId) {
        productIndex = index;
      }
    }
    this.setState({
      productNum: productIndex
    });
  }

  onReadMoreClick = () => {
    this.setState({
      productDescriptionHidden: !this.state.productDescriptionHidden
    });
  };

  addToCart = el => {
    this.setState({
      hideCart: false
    });
    const { title, price, productType } = el;
    const item = {
      title: title,
      price: price,
      productType: productType,
      size: this.state.size
    };
    if (item.size == '') {
      this.setState({
        showFlashMsg: true
      });
    } else {
      let cookie = this.cookies.get(this.cookieName);
      if (cookie) {
        const cart = this.objectToArray(cookie);
        cart.push(item);
        this.cookies.set(this.cookieName, JSON.stringify(cart), {
          path: '/'
        });
      } else {
        this.cookies.set(this.cookieName, JSON.stringify([item]), { path: '/' });
      }
      this.onHideCartClick();
      EventEmitter.dispatch('updateCart', {});
    }
  };

  objectToArray = object => {
    return Object.keys(object).map(key => object[key]);
  };

  setSize = size => {
    this.setState({ size: size });
    this.setState({
      showFlashMsg: false
    });
  };

  onHideCartClick = () => {
    this.setState({
      hideCart: !this.state.hideCart
    });
  };

  render() {
    return (
      <div className='product-main-container'>
        <ProductDescription
          title={this.state.products[this.state.productNum].title}
          verse={this.state.products[this.state.productNum].bibleVerse}
          description={this.state.products[this.state.productNum].description}
          hidden={this.state.productDescriptionHidden}
          hideProductDescription={this.onReadMoreClick}
        />
        <div className={this.state.hideCart ? 'cart-pop-up-hide' : 'cart-pop-up-show'}>
          <div
            className={
              this.state.hideCart ? 'product-cart-pop-up-hide' : 'product-cart-pop-up-show'
            }>
            <CartPopUp
              title={this.state.products[this.state.productNum].title}
              size={this.state.size}
              hideCart={this.state.hideCart}
              hideCartClick={this.onHideCartClick}
            />
          </div>
        </div>
        <div className='product-container'>
          <div className='product-item'>
            <div className='product-description-container'>
              <div className='product-caption'>
                <h1>{this.state.products[this.state.productNum].title}</h1>
              </div>
              <div className='product-price'>
                <h4>$ {this.state.products[this.state.productNum].price}.00</h4>
              </div>
              <div className='product-description'>
                <div className='product-description-wrapper'>
                  {this.state.products[this.state.productNum].description}
                </div>
              </div>
              <div className='read-more-btn' onClick={this.onReadMoreClick}>
                <h3>Read More...</h3>
              </div>
              <div className='size-btn'>
                <SizeButtons
                  sizeList={this.state.products[this.state.productNum].sizes}
                  setSizeProp={this.setSize}
                />
              </div>
              <div
                className='add-to-cart-btn'
                onClick={() => this.addToCart(this.state.products[this.state.productNum])}>
                <h4>ADD TO CART</h4>
              </div>
              {this.state.showFlashMsg && (
                <div className='select-size-error'>
                  <h4>{this.state.flashMsgTxt}</h4>
                </div>
              )}
            </div>
            <div className='product-image-container'>
              <div className='product-image-carousel'>
                <ProductImageCarousel images={this.state.products[this.state.productNum].images} />
              </div>
              <div className='product-bible-verse'>
                <div>{this.state.products[this.state.productNum].bibleVerse}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer color='#d3cec7' />
        </div>
      </div>
    );
  }
}

export default ProductPageDesktop;
