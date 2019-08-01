import React from 'react';

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <div className='newsletter-body'>
        <div className='newsletter-description'>
          <div className='newsletter-title'>Monthly Newsletters</div>
          <p>
            As a team, YHWH Apparel wants to engage with our audience more and
            create relationships with all of you. Through our monthly emails, we
            hope to keep you updated with our company and the journey we are
            going through and learn more about you!
          </p>
          <p class='email-subscribe'>
            <a href='https://yhwhapparel.us17.list-manage.com/subscribe/post?u=3b2e4256bbd2842c224d4af58&amp;id=8889cc916c'>
              {' '}
              Subscribe{' '}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
