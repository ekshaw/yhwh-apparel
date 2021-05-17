import React, { Fragment } from 'react';
import '../../styles/mobile/ProductPageMobile.css';
import Products from '../../content/Products';
import ProductImageCarousel from '../../components/ProductImageCarousel';
import MobileFooter from '../../components/MobileFooter';
import { Component } from 'react';
import SizeButtons from '../../components/SizeButtons';
import ProductDescription from '../../components/ProductDescription';
import queryString from 'query-string';
import Cookies from 'universal-cookie';
import { EventEmitter } from '../../utils/EventEmitter';

class ProductPageMobile extends Component {
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
      flashMsgTxt: 'Please select a size!'
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
      EventEmitter.dispatch('updateCart', {});
      alert('Added to Cart: ' + item.title + '. Size ' + item.size);
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

  render() {
    return (
      <div className='mobile-product-main-container'>
        <ProductDescription
          title={this.state.products[this.state.productNum].title}
          verse={this.state.products[this.state.productNum].bibleVerse}
          description={this.state.products[this.state.productNum].description}
          hidden={this.state.productDescriptionHidden}
          hideProductDescription={this.onReadMoreClick}
        />
        <div className='mobile-product-container'>
          <div className='mobile-product-item'>
            <div className='mobile-product-description-container'>
              <div className='mobile-product-caption'>
                <h1>{this.state.products[this.state.productNum].title}</h1>
              </div>
              <div className='mobile-product-price'>
                <h4>$ {this.state.products[this.state.productNum].price}.00</h4>
              </div>
              <div className='mobile-product-image-container'>
                <div className='mobile-product-image-carousel'>
                  <ProductImageCarousel
                    images={this.state.products[this.state.productNum].images}
                  />
                </div>
                <div className='mobile-product-bible-verse'>
                  <div>{this.state.products[this.state.productNum].bibleVerse}</div>
                </div>
              </div>
              <div className='mobile-product-description'>
                <div className='mobile-product-description-wrapper'>
                  {this.state.products[this.state.productNum].description}
                </div>
              </div>
              <div className='mobile-read-more-btn' onClick={this.onReadMoreClick}>
                <h3>Read More...</h3>
              </div>
              <div className='mobile-size-btn'>
                <SizeButtons
                  sizeList={this.state.products[this.state.productNum].sizes}
                  setSizeProp={this.setSize}
                />
              </div>
              <div
                className='mobile-add-to-cart-btn'
                onClick={() => this.addToCart(this.state.products[this.state.productNum])}>
                <h4>ADD TO CART</h4>
              </div>
              {this.state.showFlashMsg && (
                <div className='mobile-select-size-error'>
                  <h4>{this.state.flashMsgTxt}</h4>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <MobileFooter color='#d3cec7' />
        </div>
      </div>
    );
  }
}

export default ProductPageMobile;
