import React from 'react';
import ShopCard from '../../components/ShopCard';
import Footer from '../../components/Footer';
import '../../styles/desktop/ShopPageDesktop.css';
import Products from '../../content/Products';

const cards = [<ShopCard index='0' />, <ShopCard index='1' />, <ShopCard index='2' />];

const shopCardRows = [];
for (var i = 0; i < Math.ceil(Products.length / 3); i++) {
  shopCardRows.push(
    <div className='shopcard-row'>
      {3 * i < Products.length ? <ShopCard index={3 * i} /> : null}
      {3 * i + 1 < Products.length ? <ShopCard index={3 * i + 1} /> : null}
      {3 * i + 2 < Products.length ? <ShopCard index={3 * i + 2} /> : null}
    </div>
  );
}

const ShopPageDesktop = props => {
  return (
    <div className='shop-main-container'>
      <div className='shop-top-container'>
        <div className='shop-blank-image-box-one'>
          <div className='shop-caption-container'>
            <div className='shop-title'>
              <h1>Newest Release.</h1>
            </div>
            <div className='shop-caption'>
              {/* <h2>Assurance Collection</h2> */}
              <h3>
                “But those who hope in the Lord
                will renew their strength..."
                Isaiah 40:31 
              </h3>
              <h3>
                Shop our <b>In the Waiting</b> line.
              </h3>
            </div>
            <div className='shop-btn'>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSfop0khJw2rFOZj_WqYhpVFj0sr3dXfD8zqMqnbUiKFpbOEdg/viewform'>
                <h4>ORDER NOW</h4>
              </a>
            </div>
          </div>
        </div>
        <div className='shop-top-image'>
          <img src={require('../../images/designs/fa22popup.png')} />
        </div>
      </div>
      <div className='shopcard-container'>
        <div className='shopcard-col'>{shopCardRows}</div>
        <div className='shop-blank-image-box-two'></div>
        <div className='shop-blank-image-box-three'></div>
      </div>
      <Footer color='#white' />
    </div>
  );
};

export default ShopPageDesktop;
