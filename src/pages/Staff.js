import React from 'react';
import Member from '../components/Member';

const Staff = ({ members, staffTitle, headlineParagraphs }) => {
  console.log('headline: ' + headlineParagraphs);
  return (
    <div className='staff'>
      <div
        className='staff-headline-container'
        style={{ backgroundImage: "url('../images/staff/peter_thompson.jpg')" }}
      >
        <p className='staff-headline'>
          <h1>{staffTitle}</h1>
          {headlineParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className='staff-button-container'>
            <p className='recruiting-form'>
              <a href='https://forms.gle/aZtbDuJmrGT4pNzc9' target='_blank'>
                Apply Here!
              </a>
            </p>
            <p className='roles-sheet'>
              <a href='http://bit.ly/YHWHTeams' target='_blank'>
                Learn about the various roles!
              </a>
            </p>
          </div>
        </p>
      </div>
      <div className='member-body'>
        {members.map((member, index) => (
          <Member key={index} member={member} odd={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export default Staff;
