import React, { Component } from 'react';
import missionaries from '../content/Missionaries';
import Missionary from '../components/Missionary';

class CommunityOutreach extends Component {
  render() {
    return (
      <div className='community'>
        {missionaries.map((missionary, index) =>
           <Missionary
             key={index}
             missionary={missionary}
             odd={index % 2 === 0}
           />
        )}
      </div>
    );
  }
}

export default CommunityOutreach;
