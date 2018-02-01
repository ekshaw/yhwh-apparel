import React from 'react';

const HomeProduct = ({ url, img }) => {
  return (
    <div className='home-product'>
      <a href={url}>
        <img src={img} alt='' />
      </a>
    </div>
  );
}

export default HomeProduct;
