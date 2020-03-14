import React, { Component } from 'react';
import '../styles/AboutVideo.css';
import YouTube from 'react-youtube';

const AboutVideo = props => {
  if (props.hidden) {
    return <div></div>;
  }
  return (
    <div className='about-video-container'>
      {/* <img src={require('../images/x_button.png')}></img> */}
      <div className='about-video-overlay' onClick={props.hideVideo}></div>
      <div className='video-container'>
        <YouTube
          videoId='rej9vc7i__4'
          opts={{
            width: '100%',
            height: '630vh',
            playerVars: {
              autoplay: 1
            }
          }}
        />
      </div>
    </div>
  );
};

export default AboutVideo;
