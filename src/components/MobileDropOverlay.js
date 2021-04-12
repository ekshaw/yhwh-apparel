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
    console.log('stardew');
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
          <div className='mobile-drop-title'>Assurance.</div>
          <div className='mobile-drop-description'>
            He is doing a work in our days that we wouldn't believe if told <br />
            Habakkuk 1:5 <br />
            <br />
            Shop our latest drop now!
          </div>
          <div className='mobile-drop-btn-container'>
            <div className='mobile-drop-btn'>
              <a href='https://tinyurl.com/yhwhassurance'>
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
