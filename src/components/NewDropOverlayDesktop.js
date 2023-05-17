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
          <img className='new-drop-overlay-img' src={require('../images/designs/fa22popup.png')} />
          <div className='new-drop-overlay-exit-btn' onClick={this.onXClick}>
            <h3>X</h3>
          </div>
          <div className='new-drop-overlay-header'>
            <h3>SP '23 COLLECTION</h3>
          </div>
          <div className='new-drop-overlay-header-underline'></div>
          <div className='new-drop-overlay-title'>
            <h1>Jubilation.</h1>
          </div>
          <div className='new-drop-overlay-description'>
            <h3>
              “Count it all joy, my brothers, <br></br>
              when you meet trials of various kinds..." <br></br> 
              James 1:2-4 
            </h3>
          </div>
          <div className='new-drop-overlay-order-btn'>
            <a href='https://l.instagram.com/?u=https%3A%2F%2Fforms.gle%2FqwBkVikp9TwjfMNi6&e=AT2RgeXsaQCtYDRWDVCRZAPx_jjyrt0-_r-Fb0K3zcAhtsSoaXbbVitg6TY_HvJxLMzfgWX1gfwDx575FznQ8I3K-hlqfAeVUhpEpw'>
              <h4>ORDER NOW</h4>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewDropOverlayDesktop;
