import React from 'react';
import CommunityOutreach from '../components/CommunityOutreach';

const Missions = ({ headlineParagraphs, missionaryTitle, missionaryHeadline, missionaries }) => {
  return (
    <div className='community'>
      <div className='community-headline-container'>
        <div className='community-headline'>
          {headlineParagraphs.map((paragraph, index) =>
            <p key={index}>
              {paragraph}
            </p>
          )}
        </div>
      </div>
      <div className='missionary-body'>
        <div className='missionary-headline'>
          <h3>{missionaryTitle}</h3>
          <p>{missionaryHeadline}</p>
        </div>
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
