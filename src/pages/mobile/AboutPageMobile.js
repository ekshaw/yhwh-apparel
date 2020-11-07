import React, { Component } from 'react';
import '../../styles/mobile/AboutPageMobile.css';
import AboutPageForm from '../../components/AboutPageForm';
import AboutVideo from '../../components/AboutVideo';
import MobileFooter from '../../components/MobileFooter';

class AboutPageMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video_hidden: true,
    };
  }

  onVideoButtonClick = () => {
    this.setState({ video_hidden: !this.state.video_hidden });
  };

  render() {
    return (
      <div className='mobile-about-main-container'>
        <AboutVideo
          hidden={this.state.video_hidden}
          hideVideo={this.onVideoButtonClick}
        />
        <div className='mobile-about-container'>
          <div className='mobile-about-caption-container'>
            <div className='mobile-about-caption'>
              <h1>About Us.</h1>
            </div>
            <div className='mobile-about-description'>
              <h3>
                YHWH Apparel was created out of a love made known, a need that
                was seen, and a call that was heard. (Psalm 107) <br />
                "YHWH" is the tetragrammaton of the name of the God of the
                Bible, often read as "Yahweh" (Exodus 3:14) <br />
                It was (and still is, by certain groups) regarded too holy to be
                spoken.
              </h3>
            </div>
            <div className='mobile-video-btn' onClick={this.onVideoButtonClick}>
              <h4>PLAY VIDEO</h4>
            </div>
          </div>
        </div>
        <div className='mobile-vision-mission-container'>
          <div className='mobile-vision-container'>
            <div className='mobile-vision-caption'>
              <h2>Our Vision.</h2>
            </div>
            <div className='mobile-vision-description'>
              <h3>
                Our vision is a world in which people know and honor God for who
                He says He is. (Isaiah 45:18-25) <br />
                <br />
                We desire to tell the world the beautiful name of God, that they
                may seek and find that He is Lord and discover the steadfast
                love He has for them.
              </h3>
            </div>
          </div>
          <div className='mobile-mission-container'>
            <div className='mobile-mission-caption'>
              <h2>Our Mission.</h2>
            </div>
            <div className='mobile-mission-description'>
              <h3>
                Our mission is the Great Commission, which we received from our
                Lord Jesus Christ to make disciples of all nations. (Matthew
                28:19-20) <br /> <br />
                We seek to advance this mission by speaking biblical truth
                through our apparel, empowering people to express their identity
                as children of the Most High King.
                <br /> <br />
                We want to encourage believers to be bold as they carry the name
                of their Lord, not only on their shirts, but on their hearts.
                (Ezekiel 36:23-27)
                <br />
                <br />
                We are called to live a life of integrity and holiness before
                our God, so that His holiness might be displayed through us.
              </h3>
            </div>
          </div>
        </div>
        <div className='mobile-vision-mission-image2-container'>
          <img src={require('../../images/about/IMG_8066.jpg')}></img>
          <div className='mobile-quote'>
            <h2>
              "Boldly carry
              <br /> &nbsp; the name
              <br /> &nbsp; of the Lord."
            </h2>
          </div>
        </div>
        <AboutPageForm />
        <MobileFooter color='#eae7e1' />
      </div>
    );
  }
}

export default AboutPageMobile;
