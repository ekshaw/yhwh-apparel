import React, { Component } from 'react';
import Missionary from '../components/Missionary';
import content from '../content/Community';

class CommunityOutreach extends Component {
  render() {
    return (
      <div className='community'>
        <div className='community-headline-container'>
          <div className='community-headline'>
            {content.headlineParagraphs.map((paragraph, index) =>
              <p
                key={index}
              >
                {paragraph}
              </p>
            )}
          </div>
        </div>
        <div className='missionary-body'>
          <div className='missionary-headline'>
            <h3>{content.missionaryTitle}</h3>
            <p>{content.missionaryHeadline}</p>
          </div>
          {content.missionaries.map((missionary, index) =>
             <Missionary
               key={index}
               missionary={missionary}
               odd={index % 2 === 0}
             />
          )}
        </div>
      </div>
    );
  }
}

export default CommunityOutreach;
