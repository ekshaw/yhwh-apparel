import React, { Component } from 'react';
import Instafeed from 'react-instafeed';
import '../styles/InstagramFeed.css';

class InstagramFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      instafeedSettings: {
        limit: '8',
        ref: 'instafeed',
        resolution: 'standard_resolution',
        sortBy: 'most-recent',
        target: 'instafeed',
        userId: '2189584280',
        accessToken: '2189584280.1677ed0.cf0a6d5a22d24fa7b54114142f5f10a3'
      }
    };
  }

  componentDidMount() {
    Instafeed(this.state.instafeedSettings).then(response =>
      this.setState({ data: response.data })
    );
  }

  render() {
    const data = this.state.data;
    const imageRow1 =
      data &&
      data.map(({ images, link }, index) => {
        const image = images[this.state.instafeedSettings.resolution];
        if (index < 4) {
          return (
            <div className='instagram-image' key={index}>
              <a href={link}>
                <img src={image.url} width='100%' />
              </a>
            </div>
          );
        }
      });
    const imageRow2 =
      data &&
      data.map(({ images, link }, index) => {
        const image = images[this.state.instafeedSettings.resolution];
        if (index >= 4) {
          return (
            <div className='instagram-image' key={index}>
              <a href={link}>
                <img src={image.url} width='100%' />
              </a>
            </div>
          );
        }
      });

    const instagramImages = (
      <div className='instagram-feed'>
        <div className='instagram-image-row'>{imageRow1}</div>
        <div className='instagram-image-row'>{imageRow2}</div>
      </div>
    );

    return (
      <div className='instagram-container'>
        <div className='caption' id='instagram-caption'>
          <h1>Follow us on Instagram.</h1>
        </div>
        {instagramImages}
      </div>
    );
  }
}

export default InstagramFeed;
