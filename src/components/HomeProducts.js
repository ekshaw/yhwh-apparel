import React, { Component } from 'react';
import HomeProduct from './HomeProduct';
import yumi from '../images/home-products/yumi.jpg';
import selah from '../images/home-products/selah.jpg';
import ryan from '../images/home-products/ryan.jpg';

const products = [
  {
    img: yumi,
    url: 'http://yhwhapparel.storenvy.com/products/14971326-classic-sweatshirt'
  },{
    img: selah,
    url: 'http://yhwhapparel.storenvy.com/products/19871123-selah'
  },{
    img: ryan,
    url: 'http://yhwhapparel.storenvy.com/products/14971326-classic-sweatshirt'
  }
];

class HomeProducts extends Component {
  render() {
    return (
      <div className='home-products'>
        {products.map((product, index) =>
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
