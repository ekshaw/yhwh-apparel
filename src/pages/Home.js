import React, { Component } from 'react';
import HomeCarousel from '../components/HomeCarousel';
import HomeProducts from '../components/HomeProducts';
import HomeInstagramFeed from '../components/HomeInstagramFeed';


class Home extends Component {
  render() {
    return (
      <div className='home'>
        <HomeCarousel />
        <HomeProducts />
        <HomeInstagramFeed />
      </div>
    );
  }
}

export default Home;
