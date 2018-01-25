import React, { Component } from 'react';
import DesignRow from '../components/DesignRow';

class Designs extends Component {
  render() {
    return (
      <div className='designs'>
        {this.props.content.map((designRow, index) =>
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
