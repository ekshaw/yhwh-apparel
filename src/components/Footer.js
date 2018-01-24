import React, { Component } from 'react';
import content from '../content/Footer';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer__info-container'>
          <div className='footer__info footer__info--left'>
            {content.paragraphs.map((paragraph, index) =>
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
              {content.accounts.map((account, index) =>
                <li key={index}>
                  <a href={account.url}>
                    <i className={"fa " + account.className}></i>
                  </a>
                </li>
              )}
            </ul>

          </div>
        </div>
        <p className='footer__copyright'>Berkeley, CA &copy; YHWH 2018</p>
      </div>
    );
  }
}

export default Footer;
