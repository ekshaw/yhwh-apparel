import React from 'react';
import YouTube from 'react-youtube';

const About = ({ content: { paragraphs, videoId, emailTagline, email }}) => {
  const opts = {
    width: '100%'
  }

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

export default About;
