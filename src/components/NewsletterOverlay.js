import React, { Component } from 'react';
import '../styles/NewsletterOverlay.css';
import SubscribeFormOverlay from './SubscribeFormOverlay';

class NewsletterOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropOverlayHidden: false
    };
  }

  onXClick = () => {
    this.setState({ dropOverlayHidden: true });
  };

  render() {
    if (this.state.dropOverlayHidden) {
      return <div></div>;
    }
    return (
      <div className='newsletter-overlay-container'>
        <div className='newsletter-overlay' onClick={this.onXClick}></div>
        <div className='newsletter-overlay-content-container'>
          <img className='newsletter-overlay-img' src={require('../images/home/offseason.png')} />
          <div className='newsletter-overlay-exit-btn' onClick={this.onXClick}>
            <h3>X</h3>
          </div>
          <div className='newsletter-overlay-left-container'>
            <div className='newsletter-overlay-header'>
              <h3>YHWH APPAREL</h3>
            </div>
            <div className='newsletter-overlay-header-underline'></div>
            <div className='newsletter-overlay-title'>
              <h1>Subscribe to Us.</h1>
            </div>
            <div className='newsletter-overlay-subtitle'>
              <h3>We'd love to stay in touch with you!</h3>
            </div>
          </div>
          <div className='newsletter-overlay-right-container'> 
            <div className='newsletter-overlay-form-title'>
              <h2>Our Newsletter</h2>
            </div>
            <div className='newsletter-overlay-form'>{<SubscribeFormOverlay />}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsletterOverlay;
