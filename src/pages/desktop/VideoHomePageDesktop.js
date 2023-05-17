import React, { useRef } from 'react';
import useScrollSnap from "react-use-scroll-snap";
import { useNavigate } from 'react-router-dom';
import '../../styles/desktop/VideoHomePageDesktop.css';

const VideoHomePageDesktop = props => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50 });
  
  return (
    <div className='container' ref={scrollRef}>
      <div className='videoBox'>
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
      <div className='flexbox2'>
        <h1>Flexbox 2</h1>
        <p>This is the second flexbox.</p>
        <p>It has a blue background color.</p>
        <p>You can scroll up to see the previous flexbox.</p>
      </div>
    </div>
  );
};

export default VideoHomePageDesktop;
