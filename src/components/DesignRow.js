import React, { Component } from 'react';
import Design from './Design';

class DesignRow extends Component {
  render() {
    return (
      <div className='designs-row'>
        {this.props.designRow.map((design, index) =>
          <Design
            design={design}
            key={index}
          />
        )}
      </div>
    );
  }
}

export default DesignRow;
