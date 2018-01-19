import React, { Component } from 'react';
import Instafeed from 'react-instafeed';

class HomeInstagramFeed extends Component {
  render() {
    const instafeedTarget = 'instafeed';
    const instafeedSettings = {
      limit: '10',
      ref: 'instafeed',
      resolution: 'standard_resolution',
      sortBy: 'most-recent',
      target: instafeedTarget,
      template: '<div class="home-instafeed__img"><a href="{{link}}"><img src="{{image}}" width=100%></a></div>',
      userId: '2189584280',
      accessToken: '2189584280.1677ed0.cf0a6d5a22d24fa7b54114142f5f10a3'
    }

    return (
      <div className='home-instafeed-container'>
        <div className='home-instafeed__title'>
          <div />
          <span>Instagram</span>
          <div />
        </div>
        <div className='home-instafeed__scroll-container'>
          <div id={instafeedTarget} className='home-instafeed'>
            <Instafeed {...instafeedSettings}/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeInstagramFeed;
