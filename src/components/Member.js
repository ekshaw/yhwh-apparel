import React from 'react';

const Member = ({
  odd,
  member: { imgSrc, name, role, description, joinDate }
}) => {
  return (
    <div className={odd ? 'member' : 'member member--odd'}>
      <div className='member-profile'>
        <img src={imgSrc} alt='' />
      </div>
      <div className='member-description'>
        <div>
          <h3>{name}</h3>
          <div className='member-info'>
            <p>{role}</p>
            <p>{joinDate}</p>
          </div>
          {description}
        </div>
      </div>
    </div>
  );
};

export default Member;
