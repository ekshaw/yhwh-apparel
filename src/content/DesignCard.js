import React, { Component } from 'react';
import '../styles/DesignCard.css';

class Button extends Component {
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

class CardContent extends Component {
  render() {
    const { image, title } = this.props;
    return (
      <div className='mobile-scroll-item'>
        <h1 className='.mobile-scroll-caption'>{title}</h1>
        <h2 className='mobile-scroll-release'>{this.props.release}</h2>

        <img className='mobile-scroll-image' src={image} />
        <div className='mobile-scroll-description'>
          <h3>{this.props.text}</h3>
        </div>
        <Button />
      </div>
    );
  }
}

class DesignCard extends Component {
  render() {
    return (
      <article className='mobile-scroll-item-container'>
        <CardContent
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
