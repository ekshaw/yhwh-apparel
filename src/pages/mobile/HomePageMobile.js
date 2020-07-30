import React from 'react';
import Footer from '../../components/Footer';
import InstagramFeed from '../../components/InstagramFeed';
import '../../styles/mobile/HomePageMobile.css';

const HomePageMobile = props => {
  return (
    <div className='main-container'>
      <div className='top-container'>
        <div className='caption-container'>
          <div className='caption' id='main-caption'>
            <h1>
              A love made known. <br />
              A need that was seen. <br />A call that was heard.
            </h1>
          </div>
          <div className='description' id='company-description'>
            <h3>
              YHWH Apparel is a Christian apparel company based in Berkeley,
              California.
            </h3>
          </div>
          <div className='shop-btn'>
            <a href='https://yhwhapparel.storenvy.com/products'>
              <h4>SHOP NOW</h4>
            </a>
          </div>
        </div>
        <div className='image-container'>
          <div className='main-blank-image-box'></div>
          <div className='main-image1-container'>
            <img
              // src={require('../images/sample4.png')}
              src={require('../../images/home/IMG_7991.jpg')}
              alt='Home page pic 1'
              id='main-image1'
            />
          </div>
          <div className='main-image2-container'>
            <img
              src={require('../../images/home/IMG_2704.jpg')}
              alt='Home page pic 2'
              id='main-image2'
            />
          </div>
        </div>
      </div>
      <div className='bottom-container'>
        <div className='subscription-container'>
          <div className='caption' id='subscription-caption'>
            <h1>New drops every semester.</h1>
          </div>
          <div className='description-container'>
            <div className='description' id='subscription-description'>
              <h3>
                Stay up to date on our latest products, sales, and partnerships!
                Follow our journey to make the name and character of God known
                here in Berkeley and abroad!
              </h3>
            </div>
            <div className='subscription-btn'>
              <a href='/about/#subscribe-tab'>
                <h6>SUBSCRIBE TO THE NEWSLETTER</h6>
              </a>
            </div>
          </div>
        </div>
        <div className='subscription-image-container'>
          <div className='subscription-image1-container'>
            <img
              src={require('../../images/home/IMG_8125.jpg')}
              id='subscription-image1'
            ></img>
          </div>
          <div className='subscription-image2-container'>
            <img
              src={require('../../images/home/DSC08941.jpg')}
              id='subscription-image2'
            ></img>
          </div>
        </div>
        <InstagramFeed />
      </div>
      <Footer color='#d3cec7' />
    </div>
  );
};

export default HomePageMobile;
