import React, { Component } from 'react';
import '../styles/MobileNewsletterOverlay.css';
import SubscribeFormOverlay from './SubscribeFormOverlay';

class MobileNewsletterOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay_hidden: false
    };
  }

  onXClick = () => {
    this.setState({ overlay_hidden: true });
  };

  render() {
    if (this.state.overlay_hidden) {
      return <div></div>;
    }
    return (
      <div className='mobile-newsletter-overlay-container'>
        <div className='mobile-newsletter-overlay' onClick={this.onXClick}></div>
        <div className='mobile-newsletter-overlay-des-container'>
          <div className='mobile-newsletter-overlay-overlay-exit-btn' onClick={this.onXClick}>
            <h3>X</h3>
          </div>
          <div className='mobile-newsletter-overlay-header'>YHWH APPAREL</div>
          <div className='mobile-newsletter-overlay-line'></div>
          <div className='mobile-newsletter-overlay-title'>Subscribe to Us.</div>
          <div className='mobile-newsletter-overlay-description'>
            We'd love to stay in touch with you!
          </div>
          <div className='mobile-newsletter-overlay-form'>{<SubscribeFormOverlay />}</div>
          <div className='mobile-newsletter-overlay-btn-container'></div>
        </div>
      </div>
    );
  }
}

export default MobileNewsletterOverlay;
