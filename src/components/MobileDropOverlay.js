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
          <div className='mobile-drop-header'>S/S '20 COLLECTION</div>
          <div className='mobile-drop-line'></div>
          <div className='mobile-drop-title'>Deliverance.</div>
          <div className='mobile-drop-description'>
            “I sought the Lord, and he answered me and delivered me from all my fears.” Psalm 34:4
            <br />
            <br />
            Shop our latest drop now!
          </div>
          <div className='mobile-drop-btn-container'>
            <div className='mobile-drop-btn'>
              <a href='/product?product=deliverance_hat'>
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
