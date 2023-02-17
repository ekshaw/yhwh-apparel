import React from 'react';
import Footer from '../../components/Footer';
import '../../styles/desktop/StaffPageDesktop.css';
import Staff from '../../content/Staff';
import Member from '../../components/Member';

const StaffPageDesktop = ({ teams = Staff }) => {
  return (
    <div className='staff-main-container'>
      <div className='staff-top-container'>
        <div className='staff-top-container-background-color'>
          <div className='staff-caption-container'>
            <div className='staff-caption'>
              <h1>Meet the Team.</h1>
            </div>
          </div>
          <div className='staff-description'>
            <h3>
              Hebrews 10:24-25 tells us to "spur one another toward love and good deeds, meet up
              together, and encourage one another". As a team, we strive to inspire ourselves and
              others to serve God and carry out His mission. <br /> <br />
              We want to be open and personal with you. Meet the team members who help make YHWH
              such an awesome team!
            </h3>
          </div>
        </div>
      </div>
      <div className='staff-member-body'>
        {teams.map((teams, index) => (
          <div>
            <div className={'staff-team-' + (index % 2 == 0 ? 'even' : 'odd')}>
              <div className={'staff-team-background-' + teams.team}></div>
              <div className='staff-team-title'>
                <h1>{teams.team}</h1>
              </div>
            </div>
            {teams.members.map((member, index) => (
              <Member key={index} member={member} odd={index % 2 == 0} />
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default StaffPageDesktop;
