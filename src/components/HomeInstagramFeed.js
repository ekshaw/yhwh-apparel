import React, { Component } from 'react';
import Instafeed from 'react-instafeed';

class HomeInstagramFeed extends Component {
  render() {
    return (
      <div className='home-instafeed-container'>
        <div className='home-instafeed__title'>
          <div />
          <span>Instagram</span>
          <div />
        </div>
        <div className='home-instafeed__scroll-container'>
          <div id={this.props.instafeedTarget} className='home-instafeed'>
            <Instafeed {...this.props.instafeedSettings}/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeInstagramFeed;
