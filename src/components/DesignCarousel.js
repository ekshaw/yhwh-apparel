import React, { Component } from 'react';
import '../styles/DesignCarousel.css';
import Designs from '../content/Designs';

class DesignCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideNum: 0,
      designs: Designs,
      numDesigns: Designs.length
    };
  }

  onLeftArrowClick = () => {
    this.setState({
      slideNum: this.state.slideNum - 1 < 0 ? this.state.numDesigns - 1 : this.state.slideNum - 1
    });
  };

  onRightArrowClick = () => {
    this.setState({
      slideNum: this.state.slideNum + 1 >= this.state.numDesigns ? 0 : this.state.slideNum + 1
    });
  };

  render() {
    return (
      <div className='design-scroll-container'>
        <div className='arrow-btn' onClick={this.onLeftArrowClick}>
          <div className='left-arrow-box'></div>
          <img src={require('../images/left_arrow.png')}></img>
        </div>
        <div className='scroll-item'>
          <div className='scroll-description-container'>
            <div className='scroll-caption'>
              <h1>{this.state.designs[this.state.slideNum].title}</h1>
            </div>
            <div className='scroll-description'>
              <h3>{this.state.designs[this.state.slideNum].description}</h3>
            </div>
            <div className='shop-now-btn'>
              <a href='https://yhwhapparel.storenvy.com/products'>
                <h4>SHOP NOW</h4>
              </a>
            </div>
          </div>
          <div className='scroll-image'>
            <img src={this.state.designs[this.state.slideNum].imgSrc} />
          </div>
        </div>
        <div className='arrow-btn' onClick={this.onRightArrowClick}>
          <div className='right-arrow-box'></div>
          <img src={require('../images/right_arrow.png')}></img>
        </div>
      </div>
    );
  }
}

export default DesignCarousel;
