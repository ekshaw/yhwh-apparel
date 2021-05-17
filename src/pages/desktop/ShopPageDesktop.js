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
                “I sought the Lord, and he answered me and delivered me from all my fears.” Psalm
                34:4
              </h3>
              <h3>
                Shop the <b>Deliverance Collection</b>.
              </h3>
            </div>
            <div className='shop-btn'>
              <a href='/product?product=deliverance_hat'>
                <h4>SHOP NOW</h4>
              </a>
            </div>
          </div>
        </div>
        <div className='shop-top-image'>
          <img src={require('../../images/designs/shop_main.jpg')} />
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
