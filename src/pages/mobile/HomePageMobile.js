import React from 'react';
import InstagramFeed from '../../components/InstagramFeed';
import '../../styles/mobile/HomePageMobile.css';
import MobileFooter from '../../components/MobileFooter';
import MobileNewsletterOverlay from '../../components/MobileNewsletterOverlay';
import MobileDropOverlay from '../../components/MobileDropOverlay';

const HomePageMobile = props => {
  return (
    <div className='mobile-main-container'>
      <div className='mobile-drop-overlay-container'>
        <MobileNewsletterOverlay />
      </div>
      <div className='mobile-top-container'>
        <div className='mobile-caption-container'>
          <div className='mobile-caption' id='mobile-main-caption'>
            <h1>
              A love made known. <br />
              A need that was seen. <br />A call that was heard.
            </h1>
          </div>
          <div className='mobile-description' id='mobile-company-description'>
            <h3>YHWH Apparel is a Christian apparel company based in Berkeley, California.</h3>
          </div>
        </div>
        <div className='mobile-image-container'>
          <div className='mobile-shop-btn-container'>
            <div className='mobile-shop-btn'>
              <a href='https://yhwhapparel.storenvy.com/products'>
                <h4>SHOP NOW</h4>
              </a>
            </div>
          </div>
          <div className='mobile-main-images-section-container>'>
            <div className='mobile-main-blank-image-box'></div>
            <div className='mobile-main-image1-container'>
              <img
                // src={require('../images/sample4.png')}
                src={require('../../images/home/IMG_7991.jpg')}
                alt='Home page pic 1'
                id='mobile-main-image1'
              />
            </div>
            <div className='mobile-main-image2-container'>
              <img
                src={require('../../images/home/IMG_2704.jpg')}
                alt='Home page pic 2'
                id='mobile-main-image2'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mobile-bottom-container'>
        <div className='mobile-subscription-container'>
          <div className='mobile-caption' id='mobile-subscription-caption'>
            <h1>New drops every semester.</h1>
          </div>
          <div className='mobile-description-container'>
            <div className='mobile-description' id='mobile-subscription-description'>
              <h3>
                Stay up to date on our latest products, sales, and partnerships! Follow our journey
                to make the name and character of God known here in Berkeley and abroad!
              </h3>
            </div>
            <div className='mobile-subscription-btn'>
              <a href='/about/#subscribe-tab'>
                <h6 className='mobile-subscribe-text'>SUBSCRIBE</h6>
              </a>
            </div>
          </div>
        </div>
        <div className='mobile-subscription-image-container'>
          <div className='mobile-subscription-image1-container'>
            <img src={require('../../images/home/IMG_8125.jpg')} id='subscription-image1'></img>
          </div>
          <div className='mobile-subscription-image2-container'>
            <img src={require('../../images/home/DSC08941.jpg')} id='subscription-image2'></img>
          </div>
        </div>
        {/* <InstagramFeed /> */}
      </div>
      <MobileFooter color='#eae7e1' />
    </div>
  );
};

export default HomePageMobile;
