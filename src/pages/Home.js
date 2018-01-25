import React, { Component } from 'react';
import HomeCarousel from '../components/HomeCarousel';
import HomeProducts from '../components/HomeProducts';
import HomeInstagramFeed from '../components/HomeInstagramFeed';


class Home extends Component {
  render() {
    const { slides, products, instafeedSettings, instafeedTarget } = this.props.content;
    return (
      <div className='home'>
        <HomeCarousel slides={slides} />
        <HomeProducts products={products} />
        <HomeInstagramFeed
          instafeedSettings={instafeedSettings}
          instafeedTarget={instafeedTarget}
        />
      </div>
    );
  }
}

export default Home;
