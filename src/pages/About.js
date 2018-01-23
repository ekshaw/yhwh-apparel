import React, { Component } from 'react';
import YouTube from 'react-youtube';
import content from '../content/About';

class About extends Component {
  render() {
    const opts = {
      width: '100%'
    }
    return (
      <div className='about'>
        <div className='about-body'>
          <div className='about-description'>
            <h3>Mission and Vision</h3>
            {content.paragraphs.map((paragraph, index) =>
              <p
                key={index}
              >
                {paragraph}
              </p>
            )}
          </div>
          <div className='about-video'>
            <YouTube
              videoId={content.videoId}
              opts={opts}
            />
          </div>
        </div>
        <div className='about-contact'>
          <p>{content.emailTagline}</p>
          <p><a href={'mailto:' + content.email}>{content.email}</a></p>
        </div>
      </div>
    );
  }
}

export default About;
