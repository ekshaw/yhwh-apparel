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
        accessToken: 'IGQVJYa0U3TElnMDE1S0JxSXh2aVdwV2hmY3NLVDVBNDBMVjRJYWtQNUhBLTR2S01WMTdvVDFWQVBBY1VWTkN6UVBQQ2N4REROY2hFZA1ludnBUZAkdXY3p6U3JMZADQ1azZAWZAkotREZAB'
      }
    };
  }

  componentDidMount() {
    let url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url&&access_token=${this.state.instafeedSettings.accessToken}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then(data => {
          if(data.hasOwnProperty('error')){
            this.setState({
                isLoaded: true,
                isError:true,
              });

          }else{
            this.setState({
                isLoaded: true,
                data: data.data,
                isError:false,
              });
          }
      })
      .catch((error) => {
        console.error('Error:', error);
        this.setState({
            isLoaded: true,
            isError:true,
            error
          });
      });
  }

  render() {
    const data = this.state.data;

    if (data == null) {
      return <></>;
    }

    const images =
      data &&
      data.map((post, index) => {
        const image = post.media_url;
        const link = post.permalink;
          return (
            <div className='instagram-image' key={index}>
              <a href={link} target="_blank">
                <img src={image} width='100%' />
              </a>
            </div>
          );
      });

    const instagramImages = (
      <div className='instagram-feed'>
        <div className='instagram-image-row'>{images.slice(0, 4)}</div>
        <div className='instagram-image-row'>{images.slice(4, 8)}</div>
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
