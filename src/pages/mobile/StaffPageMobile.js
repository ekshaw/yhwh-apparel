import React from 'react';
import '../../styles/mobile/StaffPageMobile.css';
import MobileFooter from '../../components/MobileFooter';
import Staff from '../../content/Staff';

const staffArray = [];
for (var i = 0; i < Staff.length; i++) {
  for (var j = 0; j < Staff[i].members.length; j++) {
    const staffName = Staff[i].members[j].name;
    const staffCard = (
      <div className='mobile-staff-image'>
        <img src={Staff[i].members[j].imgSrcMobile} />
        <div className='mobile-staff-name'>
          <h1>{staffName}</h1>
        </div>
      </div>
    );
    staffArray.push(staffCard);
  }
}

const staffRows = [];
for (var i = 0; i < Math.ceil(staffArray.length / 2); i++) {
  staffRows.push(
    <div className='mobile-staff-row'>
      {2 * i < staffArray.length ? staffArray[2 * i] : null}
      {2 * i + 1 < staffArray.length ? staffArray[2 * i + 1] : null}
      {/* {2 * i + 2 < staffArray.length ? staffArray[2 * i + 2] : null} */}
    </div>
  );
}

const StaffPageMobile = props => {
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
            Hebrews 10: 24-25 tells us to "spur one another toward love and good deeds, meet up
            together, and encourage one another". As a team, we strive to inspire ourselves and
            others to serve God and carry out His mission. <br /> <br />
            We want to be open and personal with you. Meet the team members who help make YHWH such
            an awesome team!
          </h3>
        </div>
      </div>
      <div className='mobile-staff-container'>
        <div className='mobile-staff-container-caption'>
          <h1>Our Members.</h1>
        </div>
        {staffRows}
      </div>
      <MobileFooter color='#eae7e1' />
    </div>
  );
};

export default StaffPageMobile;
