import React, { Component } from 'react';
import Missionary from '../components/Missionary';

class CommunityOutreach extends Component {
  render() {
    return (
      <div className='community'>
        <div className='community-headline-container'>
          <div className='community-headline'>
            {this.props.content.headlineParagraphs.map((paragraph, index) =>
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
            <h3>{this.props.content.missionaryTitle}</h3>
            <p>{this.props.content.missionaryHeadline}</p>
          </div>
          {this.props.content.missionaries.map((missionary, index) =>
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
