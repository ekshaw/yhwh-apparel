import React, { Fragment } from 'react';
import '../styles/MobileFooter.css';

const MobileFooter = (props) => {
  const style = {
    backgroundColor: '' + props.color + '',
  };

  return (
    <Fragment>
      <div className='connect-container' style={style}>
        <div className='connect-fb'>
          <div className='connect-fb-icon'>
            <a href='https://www.facebook.com/yhwhapparel'>
              <img
                src={require('../images/facebook_icon.png')}
                alt='facebook-icon'
              ></img>
            </a>
          </div>
          <div className='connect-fb-caption-container'>
            <div className='connect-fb-title'>
              <h4>FOLLOW AND LIKE US ON FACEBOOK</h4>
            </div>
            <div className='connect-fb-caption'>
              <h5>Get notified about our events and campus sales.</h5>
            </div>
          </div>
        </div>
        <div className='connect-ig'>
          <div className='connect-ig-icon'>
            <a href='https://www.instagram.com/yhwhapparel'>
              <img
                src={require('../images/instagram_icon.png')}
                alt='instagram-icon'
              ></img>
            </a>
          </div>
          <div className='connect-ig-caption-container'>
            <div className='connect-ig-title'>
              <h4>FOLLOW US ON INSTAGRAM</h4>
            </div>
            <div className='connect-ig-caption'>
              <h5>Stay updated on latest drops.</h5>
            </div>
          </div>
        </div>
        <div className='connect-medium'>
          <div className='connect-medium-icon'>
            <a href='https://medium.com/@yhwhapparel/'>
              <img
                src={require('../images/medium_icon.png')}
                alt='medium-icon'
              ></img>
            </a>
          </div>
          <div className='connect-medium-caption-container'>
            <div className='connect-medium-title'>
              <h4>FOLLOW US ON MEDIUM</h4>
            </div>
            <div className='connect-medium-caption'>
              <h5>Keep up with our company and follow us on our journey.</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='mobile-footer-container' style={style}>
        <div className='mobile-footer-social-container'>
          <div className='mobile-footer-blurb'>
            <h5>
              Every design is prayed upon, biblically inpsired, and personally
              experienced.
              <br />
              100% of our profits go toward Christian charities and missions.
              <br />
              All for His glory.
            </h5>
          </div>
          <div className='mobile-yhwh-berkeley'>
            <h5>Berkeley, CA &copy; YHWH 2020</h5>
          </div>
        </div>
        <div className='mobile-bottom-border'>
          <img src={require('../images/bottom.svg')} />
        </div>
      </div>
    </Fragment>
  );
};

export default MobileFooter;
