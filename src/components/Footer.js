import React from 'react';

const Footer = ({ paragraphs, accounts }) => {
  return (
    <div className='footer'>
      <div className='footer__info-container'>
        <div className='footer__info footer__info--left'>
          {paragraphs.map((paragraph, index) =>
            <p
              key={index}
              className='footer__info-text'
            >
              {paragraph}
            </p>
          )}
        </div>
        <div className='footer__info footer__info--right'>
          <ul>
            {accounts.map(({ url, className }, index) =>
              <li key={index}>
                <a href={url}>
                  <i className={"fa " + className}></i>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <p className='footer__copyright'>Berkeley, CA &copy; YHWH 2019</p>
    </div>
  );
}

export default Footer;
