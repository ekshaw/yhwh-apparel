import React, { Fragment } from 'react';
import '../styles/MobileFooter.css';

const MobileFooter2 = (props) => {
  const style = {
    backgroundColor: '' + props.color + '',
  };

  return (
    <Fragment>
      <div className='connect-container' style={style}>
        <div className='mobile-social-icons-container'>
          <div className='mobile-icon' id='facebook-icon'>
            <a href='https://www.facebook.com/yhwhapparel'>
              <img
                src={require('../images/facebook_icon.png')}
                alt='facebook-icon'
              ></img>
            </a>
          </div>
          <div className='mobile-icon' id='instagram-icon'>
            <a href='https://www.instagram.com/yhwhapparel'>
              <img
                src={require('../images/instagram_icon.png')}
                alt='instagram-icon'
              ></img>
            </a>
          </div>
          <div className='mobile-icon' id='footer-icon'>
            <a href='https://medium.com/@yhwhapparel/'>
              <img
                src={require('../images/medium_icon.png')}
                alt='medium-icon'
              ></img>
            </a>
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

export default MobileFooter2;
