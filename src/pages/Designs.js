import React from 'react';
import Design from '../components/Design';

const Designs = ({ content }) => {
  return (
    <div className='designs'>
      {content.map((design, index) => (
        <Design design={design} key={index} />
      ))}
    </div>
  );
};

export default Designs;
