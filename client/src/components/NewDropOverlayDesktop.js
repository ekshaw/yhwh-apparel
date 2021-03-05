import React, { Component } from 'react';
import '../styles/NewDropOverlayDesktop.css';

class NewDropOverlayDesktop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dropOverlayHidden: false,
    }
  }

  onXClick = () => {
    this.setState({ dropOverlayHidden: true })
  }

  render() {
    if (this.state.dropOverlayHidden) {
      return <div></div>;
    }
    return (
      <div className='new-drop-container'>
        <div className='new-drop-overlay' onClick={this.onXClick}></div>
        <div className='new-drop-content-container'>
          <img className='new-drop-overlay-img' src={require('../images/home/assurance-drop.png')} />
          <div className='new-drop-overlay-exit-btn' onClick={this.onXClick}>
            <h3>X</h3>
          </div>
          <div className='new-drop-overlay-header'><h3>F/W '20 COLLECTION</h3></div>
          <div className='new-drop-overlay-header-underline'></div>
          <div className='new-drop-overlay-title'><h1>Assurance.</h1></div>
          <div className='new-drop-overlay-order-btn'>
            <a href='https://tinyurl.com/yhwhassurance'><h4>ORDER NOW</h4></a>
          </div>
        </div>
      </div>
    );
  }
};

export default NewDropOverlayDesktop;

