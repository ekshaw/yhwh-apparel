import React, { Fragment } from 'react';
import '../styles/ProductPage.css';
import Products from '../content/Products';

const ProductPage = (props) => {
  const product = props.location.search;
  console.log(product);

  return <div>Product page!</div>;
};

export default ProductPage;
