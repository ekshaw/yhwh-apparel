import React from 'react';

const Member = ({
  odd,
  member: { imgSrc, name, role, description, fellowship }
}) => {
  return (
    <div className={odd ? 'member' : 'member member--odd'}>
      <div className='member-profile'>
        <img src={imgSrc} alt='' />
      </div>
      <div className='member-description'>
        <div>
          <p className='member-name'>{name}</p>
          <div className='member-info'>
            <p>{role}</p>
            <p>{fellowship}</p>
          </div>
          {description}
        </div>
      </div>
    </div>
  );
};

export default Member;
