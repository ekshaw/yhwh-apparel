import React from 'react';
import '../../styles/mobile/DesignsPageMobile.css';
import DesignCarouselMobile from '../../components/DesignCarouselMobile';
import MobileFooter from '../../components/MobileFooter';
import MobileFooter2 from '../../components/MobileFooter2';

const DesignsPageMobile = (props) => {
  return (
    <div className='mobile-design-main-container'>
      <div className='mobile-design-top-container'>
        <div className='mobile-design-caption-container'>
          <div className='mobile-design-caption'>
            <h5>
              Prayer <br />
            </h5>
            <h5>
              Word <br />
            </h5>
            <h5>
              Design <br />
            </h5>
            <h5>
              Release <br />
            </h5>
          </div>
        </div>
        <div className='mobile-design-image-container'>
          <img
            src={require('../../images/design/IMG_8013-mobile.jpg')}
            alt='design page pic 1'
            id='design-image1'
          />
        </div>
      </div>
      <div className='mobile-design-process-container'>
        <div className='mobile-design-process-caption-container'>
          <div className='mobile-design-process-title'>
            <h1>Our Process.</h1>
          </div>
        </div>
        <div className='mobile-design-process-description-container'>
          <div className='mobile-prayer-container'>
            <div className='mobile-design-process-description-title mobile-prayer-description'>
              <h4>PRAYER</h4>
              <h3>
                Every YHWH Apparel design starts with prayer. As a team, we pray
                for guidance on what attribute of God or aspect of the Gospel to
                showcase next. We spend time meditating on Scripture and
                reflecting on our past experiences, sharing testimonies and
                insights until we converge on a theme.
              </h3>
            </div>
          </div>
          <div className='mobile-word-container'>
            <div className='mobile-design-process-description-title  mobile-word-description'>
              <h4>WORD</h4>
              <h3>
                Once we have a theme, we study relevant passages from the Bible
                to gain a more in-depth understanding of what God Himself says
                about the theme. We pay special attention to how each passage
                connects to the Gospel of Jesus while simultaneously revealing
                the character, will, and worthiness of God.
              </h3>
            </div>
          </div>
          <div className='mobile-design-container'>
            <div className='mobile-design-process-description-title mobile-design-description'>
              <h4>DESIGN</h4>
              <h3>
                We iterate multiple drafts and concepts until we finalize a
                design that most clearly and beautifully communicates the theme.
                We carefully consider each aspect of the design, from color to
                material to artistic style, all in service of cohesively
                showcasing God’s own beauty.
              </h3>
            </div>
          </div>
          <div className='mobile-release-container'>
            <div className='mobile-design-process-description-title mobile-release-description'>
              <h4>RELEASE</h4>
              <h3>
                We often release new products at Christian events to help fund
                other ministries and advance their missions. All our profits
                online and on-campus go directly to individual Christian
                missionaries as well as to local and global ministry
                organizations. <br /> <br />
                Learn more about our missionary partnerships on our Partnerships
                page.
              </h3>
            </div>
          </div>
          <div className='mobile-learn-more-btn'>
            <a href='/partnerships'>
              <h4>LEARN MORE</h4>
            </a>
          </div>
        </div>
      </div>
      <DesignCarouselMobile />
      <MobileFooter2 color='#d3cec7' />
      {/* <MobileFooter color='#d3cec7' /> */}
    </div>
  );
};

export default DesignsPageMobile;
