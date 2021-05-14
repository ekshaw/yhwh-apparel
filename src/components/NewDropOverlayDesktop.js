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
          <img
            className='new-drop-overlay-img'
            src={require('../images/home/deliverance_drop.jpg')}
          />
          <div className='new-drop-overlay-exit-btn' onClick={this.onXClick}>
            <h3>X</h3>
          </div>
          <div className='new-drop-overlay-header'>
            <h3>S/S '21 COLLECTION</h3>
          </div>
          <div className='new-drop-overlay-header-underline'></div>
          <div className='new-drop-overlay-title'>
            <h1>Deliverance.</h1>
          </div>
          <div className='new-drop-overlay-description'>
            <h3>
              “I sought the Lord, and he answered me and delivered me from all my fears.” Psalm 34:4
            </h3>
          </div>
          <div className='new-drop-overlay-order-btn'>
            <a href='/product?product=deliverance_hat'>
              <h4>ORDER NOW</h4>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewDropOverlayDesktop;
