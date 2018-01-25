import React, { Component } from 'react';
import YouTube from 'react-youtube';

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
            {this.props.content.paragraphs.map((paragraph, index) =>
              <p key={index}>
                {paragraph}
              </p>
            )}
          </div>
          <div className='about-video'>
            <YouTube
              videoId={this.props.content.videoId}
              opts={opts}
            />
          </div>
        </div>
        <div className='about-contact'>
          <p>{this.props.content.emailTagline}</p>
          <p><a href={'mailto:' + this.props.content.email}>{this.props.content.email}</a></p>
        </div>
      </div>
    );
  }
}

export default About;
