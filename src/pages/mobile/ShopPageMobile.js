import React from 'react';
import ShopCard from '../../components/ShopCard';
import MobileFooter from '../../components/MobileFooter';
import '../../styles/mobile/ShopPageMobile.css';
import Products from '../../content/Products';

const cards = [<ShopCard index='0' />, <ShopCard index='1' />, <ShopCard index='2' />];

const shopCardRows = [];
for (var i = 0; i < Math.ceil(Products.length / 2); i++) {
  shopCardRows.push(
    <div className='mobile-shopcard-row'>
      {2 * i < Products.length ? <ShopCard index={2 * i} /> : null}
      {2 * i + 1 < Products.length ? <ShopCard index={2 * i + 1} /> : null}
    </div>
  );
}

const ShopPageMobile = props => {
  return (
    <div className='mobile-shop-main-container'>
      <div className='mobile-shop-top-container'>
        <div className='mobile-shop-top-image'>
          <img src={require('../../images/designs/fa22popup.png')} />
        </div>
        <div className='mobile-shop-caption-background'></div>
        <div className='mobile-shop-caption-container'>
          <div className='mobile-shop-title'>
            <h1>Newest Release.</h1>
          </div>
          <div className='mobile-shop-caption'>
            {/* <h2>Assurance Collection</h2> */}
            <h3>
              “But those who hope in the Lord
              will renew their strength..."
              Isaiah 40:31 
            </h3>
            <h3>
              Shop the <b>In the Waiting Collection</b>.
            </h3>
          </div>
          <div className='mobile-new-release-btn'>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSfop0khJw2rFOZj_WqYhpVFj0sr3dXfD8zqMqnbUiKFpbOEdg/viewform'>
              <h4>ORDER NOW</h4>
            </a>
          </div>
        </div>
      </div>
      <div className='mobile-shopcard-container'>
        <div className='mobile-shop-blank-image-box-two'></div>
        <div className='mobile-shop-blank-image-box-three'></div>
        {shopCardRows}
      </div>
      <MobileFooter color='#white' />
    </div>
  );
};

export default ShopPageMobile;
