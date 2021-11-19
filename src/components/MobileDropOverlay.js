import React, { Component } from 'react';
import '../styles/MobileDropOverlay.css';

class MobileDropOverlay extends Component {
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
      <div className='mobile-drop-container' onClick={this.onXClick}>
        <div className='mobile-drop-overlay'></div>
        <div className='mobile-drop-des-container'>
          <div className='mobile-drop-overlay-exit-btn' onClick={this.onXClick}>
            <h3>X</h3>
          </div>
          <div className='mobile-drop-header'>F/W '20 COLLECTION</div>
          <div className='mobile-drop-line'></div>
          <div className='mobile-drop-title'>Reset.</div>
          <div className='mobile-drop-description'>
            "So that at the name of Jesus every knee should bow... and every tongue confess that
            Jesus Christ is Lord" Philippians 2:10
            <br />
            <br />
            Shop our latest drop now!
          </div>
          <div className='mobile-drop-btn-container'>
            <div className='mobile-drop-btn'>
              <a href='https://tinyurl.com/resetorders'>
                <h4>ORDER NOW</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileDropOverlay;
