import React from 'react'
import { useHistory } from "react-router-dom";
import '../../styles/desktop/VideoHomePageDesktop.css';

const VideoHomePageDesktop = props => {
  const history = useHistory();

  const handleScroll = (event) => {
    const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    if (bottom) {
      history.push('/home');
    }
  };

  const handleClick = () => {
    history.push('/home');
  };

  return (
    <div className='videoContainer' onScroll={handleScroll}>
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
        <div class="arrow" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default VideoHomePageDesktop;
