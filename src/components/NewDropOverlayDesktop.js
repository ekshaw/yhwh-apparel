import React, { Component } from 'react';
import '../styles/NewDropOverlayDesktop.css';

class NewDropOverlayDesktop extends Component {
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
      <div className='new-drop-container'>
        <div className='new-drop-overlay' onClick={this.onXClick}></div>
        <div className='new-drop-content-container'>
          <img className='new-drop-overlay-img' src={require('../images/designs/shop_main.jpg')} />
          <div className='new-drop-overlay-exit-btn' onClick={this.onXClick}>
            <h3>X</h3>
          </div>
          <div className='new-drop-overlay-header'>
            <h3>FA '22 COLLECTION</h3>
          </div>
          <div className='new-drop-overlay-header-underline'></div>
          <div className='new-drop-overlay-title'>
            <h1>Waiting.</h1>
          </div>
          <div className='new-drop-overlay-description'>
            <h3>
              “The kingdom of heaven is like a treasure hidden in a field, which a man found and
              covered up...” Matthew 13:44
            </h3>
          </div>
          <div className='new-drop-overlay-order-btn'>
            <a href='https://forms.gle/VPqHdSnNAVPdeacb7'>
              <h4>ORDER NOW</h4>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewDropOverlayDesktop;
