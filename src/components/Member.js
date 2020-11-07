import React from 'react';
import '../styles/Member.css';

const Member = ({ odd, member: { imgSrcDesktop, name, role, description } }) => {
  return (
    <div className='member-main-container'>
      <div className={'member-' + (odd == 1 ? 'odd' : 'even')}>
        <div className='member-image'>
          <img src={imgSrcDesktop} alt='' />
        </div>
        <div className='member-description-container'>
          <div>
            <div className='member-name'>
              <h2>{name}</h2>
            </div>
            <div className='member-role'>{role}</div>
            <div className='member-description'>{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
