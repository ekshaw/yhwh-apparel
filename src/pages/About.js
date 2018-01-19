import React, { Component } from 'react';
import YouTube from 'react-youtube';
import paragraphs from '../content/AboutParagraphs';

class About extends Component {
  render() {
    const opts = {
      width: '100%'
    }
    return (
      <div className='about'>
        <div className='about-description'>
          <h3>Mission and Vision</h3>
          {paragraphs.map((paragraph, index) =>
            <p
              key={index}
            >
              {paragraph}
            </p>
          )}
        </div>
        <div className='about-video'>
          <YouTube
            videoId={'rej9vc7i__4'}
            opts={opts}
          />
        </div>

      </div>
    );
  }
}

export default About;
