import React, { Component } from 'react';
import HomeProduct from './HomeProduct';

class HomeProducts extends Component {
  render() {
    return (
      <div className='home-products'>
        {this.props.products.map((product, index) =>
           <HomeProduct
             key={index}
             img={product.img}
             url={product.url}
           />
        )}
      </div>
    );
  }
}

export default HomeProducts;
