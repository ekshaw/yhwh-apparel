import React from 'react';
import ShopCard from '../components/ShopCard';
import Footer from '../components/Footer';
import '../styles/ShopPage.css';
import Products from '../content/Products';

const cards = [
  <ShopCard index='0' />, <ShopCard index='1' />, <ShopCard index='2' />
]

const shopCardRows = []
for (var i = 0; i < Math.ceil(Products.length / 3); i++) {
  shopCardRows.push(<div className="shopcard-row">
    {(3 * i < Products.length) ? <ShopCard index={3 * i} /> : null}
    {(3 * i + 1 < Products.length) ? <ShopCard index={3 * i + 1} /> : null}
    {(3 * i + 2 < Products.length) ? <ShopCard index={3 * i + 2} /> : null}
  </div>)
}

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
        {/* <div className="shopcard-row-one">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          {cards}
        </div>
        <div className="shopcard-row-two">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          {cards}
        </div>  */}
        {shopCardRows}
      </div>
      <div className='blank-image-box-two'></div>
      <Footer color='#white' />
    </div>
  );
};

export default ShopPage;
