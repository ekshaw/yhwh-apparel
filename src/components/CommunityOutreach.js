import React from 'react';

const Missionary = ({
  odd,
  missionary: { imgSrc, name, location, date, description }
}) => {
  return (
    <div className={odd ? 'missionary' : 'missionary missionary--odd'}>
      <div className='missionary-profile'>
        <img src={imgSrc} alt='' />
      </div>
      <div className='missionary-description'>
        <div>
          <h3>{name}</h3>
          <div className='missionary-info'>
            <p>{location}</p>
            <p>{date}</p>
          </div>
          {description}
        </div>
      </div>
    </div>
  );
};

export default Missionary;
