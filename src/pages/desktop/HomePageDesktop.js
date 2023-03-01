import React from 'react';
import Footer from '../../components/Footer';
import InstagramFeed from '../../components/InstagramFeed';
import '../../styles/desktop/HomePageDesktop.css';

const HomePageDesktop = props => {
  return (
    <div className='main-container'>
      <video id="backgroundVideo" muted autoPlay loop playsInline>
        <source src={require('../../images/home/Raindrops_Videvo.mp4')} type="video/mp4" />
      </video>
    </div>
  );
};

export default HomePageDesktop;
