import React from 'react';
import '../../styles/desktop/VideoHomePageDesktop.css';

const VideoHomePageDesktop = props => {
  return (
    <div className='videoContainer'>
      <video className="backgroundVideo" muted autoPlay loop playsInline>
        <source src={require('../../images/home/Raindrops_Videvo.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="videoText">
        <h1>YHWH APPAREL</h1>
      </div>
      <div className="scroll">
        <h1>scroll</h1>
        <br></br>
        <br></br>
        <div class="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default VideoHomePageDesktop;
