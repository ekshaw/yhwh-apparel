import React from 'react';
import '../styles/ProductDescription.css';

const ProductDescription = props => {
  if (props.hidden) {
    return <div></div>;
  }
  return (
    <div className='product-description-container'>
      <div className='product-description-overlay' onClick={props.hideProductDescription}></div>
      <div className='product-des-container'>
        <div className='product-overlay-exit-btn' onClick={props.hideProductDescription}>
          X
        </div>
        <div className='product-overlay-title'>{props.title}</div>
        <div className='product-overlay-verse'>{props.verse}</div>
        <div className='product-overlay-description'>{props.description}</div>
      </div>
    </div>
  );
};

export default ProductDescription;
