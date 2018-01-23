import React, { Component } from 'react';
import HomeCarousel from '../components/HomeCarousel';
import HomeProducts from '../components/HomeProducts';
import HomeInstagramFeed from '../components/HomeInstagramFeed';
import content from '../content/Home';


class Home extends Component {
  render() {
    return (
      <div className='home'>
        <HomeCarousel
          slides={content.slides}
        />
        <HomeProducts
          products={content.products}
        />
        <HomeInstagramFeed
          instafeedSettings={content.instafeedSettings}
          instafeedTarget={content.instafeedTarget}
        />
      </div>
    );
  }
}

export default Home;
