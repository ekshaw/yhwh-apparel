import React, { Fragment } from 'react';
import '../styles/ProductPage.css';
import Products from '../content/Products';
import ProductImageCarousel from '../components/ProductImageCarousel';
import Footer from '../components/Footer';
import { Component } from 'react';
import SizeButtons from '../components/SizeButtons';
import ProductDescription from '../components/ProductDescription';
import queryString from 'query-string';
import Cookies from 'universal-cookie';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.cookies = new Cookies();
    this.state = {
      productNum: 0,
      products: Products,
      numProducts: Products.length,
      productdescription_hidden: true
    };
  }

  componentWillMount() {
    const query = queryString.parse(this.props.location.search);
    var productIndex;
    for (let index = 0; index < Products.length; index++) {
      if (query.product == Products[index].productId) {
        productIndex = index;
      }
    }
    this.setState({
      productNum: productIndex
    });
  }

  onReadMoreClick = () => {
    this.setState({ productdescription_hidden: !this.state.productdescription_hidden });
  };

  addToCart = el => {
    console.log('crying');
    const { title, price } = el;
    const item = {
      title: title,
      price: price,
      size: this.state.size
    };
    let cookie = this.cookies.get('egg');
    if (cookie) {
      const cart = this.objectToArray(cookie);
      cart.push(item);
      this.cookies.set('egg', JSON.stringify(cart), {
        path: '/'
      });
    } else {
      this.cookies.set('egg', JSON.stringify([item]), { path: '/' });
    }
    // cookie = cookies.get(cookieName);
    // setCookie(cookie);
  };

  objectToArray = object => {
    return Object.keys(object).map(key => object[key]);
  };

  setSize = size => {
    this.setState({ size: size });
  };

  render() {
    return (
      <div className='product-main-container'>
        <ProductDescription
          title={this.state.products[this.state.productNum].title}
          verse={this.state.products[this.state.productNum].bibleVerse}
          description={this.state.products[this.state.productNum].description}
          hidden={this.state.productdescription_hidden}
          hideProductDescription={this.onReadMoreClick}
        />
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

export default ProductPage;
