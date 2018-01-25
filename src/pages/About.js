import React, { Component } from 'react';
import YouTube from 'react-youtube';

class About extends Component {
  render() {
    const opts = {
      width: '100%'
    }

    const { paragraphs, videoId, emailTagline, email } = this.props.content;
    return (
      <div className='about'>
        <div className='about-body'>
          <div className='about-description'>
            <h3>Mission and Vision</h3>
            {paragraphs.map((paragraph, index) =>
              <p key={index}>
                {paragraph}
              </p>
            )}
          </div>
          <div className='about-video'>
            <YouTube
              videoId={videoId}
              opts={opts}
            />
          </div>
        </div>
        <div className='about-contact'>
          <p>{emailTagline}</p>
          <p><a href={'mailto:' + email}>{email}</a></p>
        </div>
      </div>
    );
  }
}

export default About;
