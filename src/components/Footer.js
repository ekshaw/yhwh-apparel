import React from 'react';
import '../styles/Footer.css';

const Footer = props => {
  const style = {
    backgroundColor: '' + props.color + ''
  };

  return (
    <div className='footer-container' style={style}>
      <div className='footer-blurb'>
        <h5>
          Every design is prayed upon, biblically inspired, and personally
          experienced.
          <br />
          100% of our profits go toward Christian charities and missions.
          <br />
          All for His glory.
        </h5>
      </div>
      <div className='footer-social-container'>
        <div className='social-icons-container'>
          <div className='icon' id='facebook-icon'>
            <a href='https://www.facebook.com/yhwhapparel'>
              <img
                src={require('../images/facebook_icon.png')}
                alt='facebook-icon'
              ></img>
            </a>
          </div>
          <div className='icon' id='instagram-icon'>
            <a href='https://www.instagram.com/yhwhapparel'>
              <img
                src={require('../images/instagram_icon.png')}
                alt='instagram-icon'
              ></img>
            </a>
          </div>
          <div className='icon' id='footer-icon'>
            <a href='https://medium.com/@yhwhapparel/'>
              <img
                src={require('../images/medium_icon.png')}
                alt='medium-icon'
              ></img>
            </a>
          </div>
        </div>
        <div className='yhwh-berkeley'>
          <h5>Berkeley, CA &copy; YHWH 2020</h5>
        </div>
      </div>
      <div className='bottom-border'>
        <img src={require('../images/bottom.svg')} />
      </div>
    </div>
  );
};

export default Footer;
