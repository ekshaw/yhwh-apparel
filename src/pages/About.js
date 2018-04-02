import React from 'react';
import YouTube from 'react-youtube';

const About = ({ paragraphs, videoId, emailTagline, email }) => {
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
          <h3>Monthly Newsletters</h3>
          <p> 
            As a team, YHWH Apparel wants to engage with our audience more and create relationships with all of you. Through our monthly emails, we hope to keep you updated with our company and the journey we are going through and learn more about you! 
          </p>
          <p class="email-subscribe" >
            <a href="https://yhwhapparel.us17.list-manage.com/subscribe/post?u=3b2e4256bbd2842c224d4af58&amp;id=8889cc916c"> Subscribe </a>
          </p>
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
