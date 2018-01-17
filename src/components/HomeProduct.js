import React, { Component } from 'react';

class HomeProduct extends Component {
  render() {
    return (
      <div className='home-product'>
        <a href={this.props.url}>
          <img src={this.props.img} alt='' />
        </a>
      </div>
    );
  }
}

export default HomeProduct;
