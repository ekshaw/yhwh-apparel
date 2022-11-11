import React from 'react';
import '../../styles/mobile/PartnershipsPageMobile.css';
import PartnershipTabs from '../../components/PartnershipTabs';
import MobileFooter from '../../components/MobileFooter';

const PartnershipsPageMobile = props => {
  return (
    <div className='mobile-partnerships-main-container'>
      <div className='mobile-partnerships-container'>
        <div className='mobile-partnerships-caption-container'>
          <div className='mobile-partnerships-caption'>
            <h1>Partnerships.</h1>
          </div>
          <div className='mobile-partnerships-description'>
            <h3>
              More than simply producing Christian clothing, YHWH Apparel actively partners with the
              rest of the Church to carry out this Great Commission.
            </h3>
          </div>
        </div>
        <div className='mobile-partnerships-image'>
          <img src={require('../../images/partnerships/group.jpg')}></img>
        </div>
      </div>
      <div className='mobile-tab-container'>
        <PartnershipTabs />
      </div>
      <div className='mobile-in-touch-container'>
        <div className='mobile-in-touch-caption-container'>
          <div className='mobile-in-touch-caption'>
            <h1>Get in Touch with Us.</h1>
          </div>
          <div className='mobile-in-touch-description'>
            <h3>
              If you... <br />
              1. Have questions about God, Christianity, or our company,
              <br />
              2. Would like to receive financial support for your mission, or <br />
              3. Would like to start your own YHWH Apparel chapter on your campus
              <br />
            </h3>
          </div>
          <div className='mobile-contact-btn'>
            <a href='/about/#contact-tab'>
              <h4>CONTACT US</h4>
            </a>
          </div>
        </div>
      </div>
      <MobileFooter color='#eae7e1' />
    </div>
  );
};

export default PartnershipsPageMobile;
