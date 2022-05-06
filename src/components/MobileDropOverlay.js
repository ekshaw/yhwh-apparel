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
          <div className='mobile-drop-header'>S/S '22 COLLECTION</div>
          <div className='mobile-drop-line'></div>
          <div className='mobile-drop-title'>Treasure.</div>
          <div className='mobile-drop-description'>
            “The kingdom of heaven is like a treasure hidden in a field, which a man found and
            covered up...” Matthew 13:44
            <br />
            <br />
            Shop our latest drop now!
          </div>
          <div className='mobile-drop-btn-container'>
            <div className='mobile-drop-btn'>
              <a href='https://forms.gle/VPqHdSnNAVPdeacb7'>
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
