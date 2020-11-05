import React from 'react';
import '../../styles/mobile/StaffPageMobile.css';
import MobileFooter from '../../components/MobileFooter';
import MobileFooter2 from '../../components/MobileFooter2';

const StaffPageMobile = (props) => {
  return (
    <div className='mobile-staff-main-container'>
      <div className='mobile-staff-top-container'>
        <div className='mobile-staff-caption-container'>
          <div className='mobile-staff-caption'>
            <h1>Meet the Team.</h1>
          </div>
        </div>
        <div className='mobile-staff-description'>
          <h3>
            Hebrews 10: 24-25 tells us to "spur one another toward love and good
            deeds, meet up together, and encourage one another". As a team, we
            strive to inspire ourselves and others to serve God and carry out
            His mission. <br /> <br />
            We want to be open and personal with you. Meet the team members who
            help make YHWH such an awesome team!
          </h3>
        </div>
      </div>
      <div className='mobile-staff-container'>
        <div className='mobile-staff-container-caption'>
          <h1>Our Members.</h1>
        </div>
        <div className='mobile-row'>
          <div className='mobile-staff-image'>
            <img src={require('../../images/staff/nicole.jpg')} />
            <div className='mobile-staff-name'>
              <h1>
                Nicole <br /> Lee
              </h1>
            </div>
          </div>
          <div className='mobile-staff-image'>
            <img src={require('../../images/staff/peter.jpg')} />
            <div className='mobile-staff-name'>
              <h1>Peter Thompson</h1>
            </div>
          </div>
          <div className='mobile-staff-image'>
            <img src={require('../../images/staff/rachel.jpg')} />
            <div className='mobile-staff-name'>
              <h1>Rachel Miller</h1>
            </div>
          </div>
        </div>
        <div className='mobile-row'>
          <div className='mobile-staff-image'>
            <img src={require('../../images/staff/sooyoung.jpg')} />
            <div className='mobile-staff-name'>
              <h1>Sooyoung Park</h1>
            </div>
          </div>
          <div className='mobile-staff-image'>
            <img src={require('../../images/staff/kristen.jpg')} />
            <div className='mobile-staff-name'>
              <h1>
                Kristen <br />
                Yee
              </h1>
            </div>
          </div>
          <div className='mobile-staff-image'>
            <img src={require('../../images/staff/matt.jpg')} />
            <div className='mobile-staff-name'>
              <h1>
                Matt <br />
                Flores
              </h1>
            </div>
          </div>
        </div>
        <div className='mobile-row'>
          <div className='mobile-staff-image'>
            <img src={require('../../images/staff/aaron.jpg')} />
            <div className='mobile-staff-name'>
              <h1>
                Aaron <br />
                Wu
              </h1>
            </div>
          </div>
          <div className='mobile-staff-image'>
            <img src={require('../../images/staff/emily.jpg')} />
            <div className='mobile-staff-name'>
              <h1>
                Emily <br />
                Shaw
              </h1>
            </div>
          </div>
          <div className='mobile-staff-image'>
            <img src={require('../../images/staff/angela.jpg')} />
            <div className='mobile-staff-name'>
              <h1>
                Angela <br />
                Ea
              </h1>
            </div>
          </div>
        </div>
      </div>
      <MobileFooter2 color='#eae7e1' />
      {/* <MobileFooter color='#eae7e1' /> */}
    </div>
  );
};

export default StaffPageMobile;
