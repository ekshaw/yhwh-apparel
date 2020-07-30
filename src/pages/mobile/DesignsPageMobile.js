import React from 'react';
import Footer from '../../components/Footer';
import '../../styles/mobile/DesignsPageMobile.css';
import DesignCarousel from '../../components/DesignCarousel';

const DesignsPageMobile = props => {
  return (
    <div className='design-main-container'>
      <div className='design-top-container'>
        <div className='design-caption-container'>
          <div className='design-caption'>
            <h1>
              Prayer <br />
            </h1>
            <h1>
              Word <br />
            </h1>
            <h1>
              Design <br />
            </h1>
            <h1>
              Release <br />
            </h1>
          </div>
        </div>
        <div className='design-image-container'>
          <img
            src={require('../../images/design/IMG_8013.jpg')}
            alt='design page pic 1'
            id='design-image1'
          />
        </div>
      </div>
      <div className='design-process-container'>
        <div className='design-process-caption-container'>
          <div className='design-process-title'>
            <h1>Our Process.</h1>
          </div>
          <div className='process-image-container'>
            <img
              src={require('../../images/design/DSC00261.jpg')}
              alt='design page pic 2'
              id='des-image2'
            />
          </div>
        </div>
        <div className='design-process-description-container'>
          <div className='prayer-container'>
            <div className='design-process-description-title prayer-description'>
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
          <div className='word-container'>
            <div className='design-process-description-title  word-description'>
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
          <div className='design-container'>
            <div className='design-process-description-title design-description'>
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
          <div className='release-container'>
            <div className='design-process-description-title release-description'>
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
          <div className='learn-more-btn'>
            <a href='/partnerships'>
              <h4>LEARN MORE</h4>
            </a>
          </div>
        </div>
      </div>
      <DesignCarousel />
      <Footer color='#d3cec7' />
    </div>
  );
};

export default DesignsPageMobile;
