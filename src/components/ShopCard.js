import React, { Component } from 'react';
import '../styles/ShopCard.css';
import Products from '../content/Products';

class ShopCard extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     index: props.index,
    //     products: Products,
    //     numProducts: Products.length,
    //     prodId: Products.productId
    // };
  }

  // onShopImageClick = () => {
  //     var linkElement = document.getElementById("shoplink");
  //     linkElement.href = "http://localhost:3000/product?product="+ this.state.products[this.state.index].productId;
  //   };

  render() {
    return (
      <div className='shop-container'>
        <a href={`http://localhost:3000/product?product=${Products[this.props.index].productId}`}>
          <div className='shop-image'>{Products[this.props.index].images[0]}</div>
        </a>
        <div className='shop-text'>
          <h2 className='shop-name'>{Products[this.props.index].title}</h2>
          <h3 className='shop-cost'>$ {Products[this.props.index].price}.00</h3>
        </div>
      </div>
    );
  }
}

export default ShopCard;
