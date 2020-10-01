import React from 'react';
import ShopCard from '../components/ShopCard';
import Footer from '../components/Footer';
import '../styles/ShopPage.css';

const ShopPage = props => {
  return (
    <div className='main-container'>
      <div className='top-container'>
        <div className='top-captions'>
          <div className='shop-title'>
            <h1>Newest Release.</h1>
          </div>
          <div className='shop-caption'>
            <h2>Run with Endurance</h2>
          </div>
          <div className='shop-btn'>
            {/* <a href='https://yhwhapparel.storenvy.com/products'> */}
            <h4>SHOP NOW</h4>
            {/* </a> */}
          </div>
        </div>
        <div className='top-image'>
          <img src={require('../images/designs/shop-main.jpg')} />
        </div>
      </div>
      <div className='blank-image-box-one'></div>
      <div className='shopcard-container'>
        <div className="shopcard-row-one">
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
        <div className="shopcard-row-two">
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </div>
      <div className='blank-image-box-two'></div>
      <Footer color='#white' />
    </div>
  );
};

export default ShopPage;
