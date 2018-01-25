import React, { Component } from 'react';
import content from '../content/Designs';
import DesignRow from '../components/DesignRow';

class Designs extends Component {
  render() {
    return (
      <div className='designs'>
        {content.designRows.map((designRow, index) =>
          <DesignRow
            designRow={designRow}
            key={index}
          />
        )}
      </div>
    );
  }
}

export default Designs;
