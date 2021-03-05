import React, { Component } from 'react';
import '../styles/DesignCard.css';

class ShopButton extends Component {
  render() {
    return (
      <button className='mobile-shop-now-btn'>
        <a href='https://yhwhapparel.storenvy.com/products'>
          <h4>SHOP NOW</h4>
        </a>
      </button>
    );
  }
}

class DesignCardContent extends Component {
  render() {
    return (
      <div className='mobile-scroll-item'>
        <h2 className='.mobile-scroll-caption'>{this.props.title}</h2>
        <h3 className='mobile-scroll-release'>{this.props.release}</h3>

        <img className='mobile-scroll-image' src={this.props.image} />
        <div className='mobile-scroll-description'>
          <h3>{this.props.text}</h3>
        </div>
        <ShopButton />
      </div>
    );
  }
}

class DesignCard extends Component {
  render() {
    return (
      <article className='mobile-scroll-item-container'>
        <DesignCardContent
          title={this.props.details.title}
          image={this.props.details.imgSrc}
          release={this.props.details.release}
          text={this.props.details.description}
        />
      </article>
    );
  }
}

export default DesignCard;
