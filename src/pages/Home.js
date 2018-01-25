import React, { Component } from 'react';
import HomeCarousel from '../components/HomeCarousel';
import HomeProducts from '../components/HomeProducts';
import HomeInstagramFeed from '../components/HomeInstagramFeed';


class Home extends Component {
  render() {
    return (
      <div className='home'>
        <HomeCarousel slides={this.props.content.slides} />
        <HomeProducts products={this.props.content.products} />
        <HomeInstagramFeed
          instafeedSettings={this.props.content.instafeedSettings}
          instafeedTarget={this.props.content.instafeedTarget}
        />
      </div>
    );
  }
}

export default Home;
