import React, { Component } from 'react';
import '../styles/ProductImageCarousel.css';

class ProductImageCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgNum: 0,
      thumbs: props.images,
      numImgs: props.images.length
    };
  }

  onLeftArrowImgClick = () => {
    this.setState({
      imgNum: this.state.imgNum - 1 < 0 ? this.state.numImgs - 1 : this.state.imgNum - 1
    });
  };

  onRightArrowImgClick = () => {
    this.setState({
      imgNum: this.state.imgNum + 1 >= this.state.numImgs ? 0 : this.state.imgNum + 1
    });
  };

  onImgClick(index) {
    this.setState({
      imgNum: (this.state.imgNum = index)
    });
  }

  render() {
    return (
      <div className='img-carousel-main-container'>
        <div className='img-arrow-btn' onClick={this.onLeftArrowImgClick}>
          <div className='img-left-arrow-box'>
            <div className='img-left-arrow-box-background'></div>
            <div className='img-arrow'>
              <img src={require('../images/left_arrow.png')}></img>
            </div>
          </div>
        </div>
        <div className='img-carousel-item'>
          <div className='main-img-container'>{this.state.thumbs[this.state.imgNum]} </div>
          <ul className='img-thumb-container'>
            {this.state.thumbs.map((thumb, index) => (
              <li
                className={'img-thumb ' + (index == this.state.imgNum ? 'selected' : '')}
                onClick={() => this.onImgClick(index)}>
                {thumb}
              </li>
            ))}
          </ul>
        </div>
        <div className='img-arrow-btn' onClick={this.onRightArrowImgClick}>
          <div className='img-right-arrow-box'>
            <div className='img-right-arrow-box-background'></div>
            <div className='img-arrow'>
              <img src={require('../images/right_arrow.png')}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductImageCarousel;
