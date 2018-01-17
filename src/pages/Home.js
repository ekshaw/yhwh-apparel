import React, { Component } from 'react';
import HomeCarousel from '../components/HomeCarousel';
import HomeProducts from '../components/HomeProducts';


class Home extends Component {
  render() {
    return (
      <div className='home'>
        <HomeCarousel />
        <HomeProducts />
      </div>
    );
  }
}

export default Home;
