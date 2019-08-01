import React from 'react';
import HomeProduct from './HomeProduct';

const HomeProducts = ({ products }) => {
  return (
    <div className='home-products'>
      {products.map(({ img, url }, index) => (
        <HomeProduct key={index} img={img} url={url} />
      ))}
    </div>
  );
};

export default HomeProducts;
