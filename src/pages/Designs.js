import React, { Component } from 'react';
import Design from '../components/Design';

class Designs extends Component {
  render() {
    return (
      <div className='designs'>
        {this.props.content.map((design, index) =>
          <Design
            design={design}
            key={index}
          />
        )}
      </div>
    );
  }
}

export default Designs;
