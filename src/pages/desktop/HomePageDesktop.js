import React from 'react'
import { useHistory } from "react-router-dom";
import '../../styles/desktop/HomePageDesktop.css';

const HomePageDesktop = props => {
  let history = useHistory();

  const handleScroll = (event) => {
    history.push('/home');
  };

  return (
    <div className='videoContainer' onScroll={handleScroll}>
      <video className="backgroundVideo" muted autoPlay loop playsInline>
        <source src={require('../../images/home/Raindrops_Videvo.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="videoText">
        <h1>HOME</h1>
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

export default HomePageDesktop;
