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
          <img src={require('../../images/designs/shop_main.jpg')} />
        </div>
        <div className='mobile-shop-caption-background'></div>
        <div className='mobile-shop-caption-container'>
          <div className='mobile-shop-title'>
            <h1>Newest Release.</h1>
          </div>
          <div className='mobile-shop-caption'>
            {/* <h2>Assurance Collection</h2> */}
            <h3>
              “The kingdom of heaven is like a treasure hidden in a field, which a man found and
              covered up...” Matthew 13:44
            </h3>
            <h3>
              Shop the <b>Treasure Collection</b>.
            </h3>
          </div>
          <div className='mobile-new-release-btn'>
            <a href='https://forms.gle/VPqHdSnNAVPdeacb7'>
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
