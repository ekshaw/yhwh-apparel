import React from 'react';
import CommunityOutreach from '../components/CommunityOutreach';

const Missions = ({ headlineParagraphs, missionaryTitle, missionaries }) => {
  return (
    <div className='community'>
      <div className='community-headline-container'>
        <div className='community-headline'>
          <h1>{missionaryTitle}</h1>
          {headlineParagraphs.map((paragraph, index) =>
            <p key={index}>
              {paragraph}
            </p>
          )}
          <p> The application to be sponsored is <a href="https://goo.gl/forms/fPHQcHCPWEUPVPzo2" target="_blank">here</a>!</p>
        </div>
      </div>
      <div className='missionary-body'>
        {missionaries.map((missionary, index) =>
           <CommunityOutreach
             key={index}
             missionary={missionary}
             odd={index % 2 === 0}
           />
        )}
      </div>
    </div>
  );
}

export default Missions;
