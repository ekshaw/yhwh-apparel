import React, { Component } from 'react';
import '../styles/PartnershipTabs.css';
import PartnershipCarouselMobile from './PartnershipCarouselMobile';
import Missionaries from '../content/Missionaries';
import Organizations from '../content/Organizations';

class PartnershipsTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form_summary: (
        <h3>
          As you labor for the Lord, we want to partner with you and support you in the specific
          mission God has given you! As you are faithful in your part, we also want to be faithful
          with what God has given us.
          <br />
          <br />
          <br />
          Here are some friends whom we have supported who have gone or are going on short-term
          missions to share the Gospel of Jesus Christ. Join us in praying for these individuals and
          the people they come across, that their obedience to and partnership with the Holy Spirit
          would result in salvation and worship wherever they go!
        </h3>
      ),
      form_active_tab: 'missionaries'
    };
  }

  onSubscribeTabClick = () => {
    if (this.state.form_active_tab !== 'missionaries') {
      this.setState({
        form_summary: (
          <h3>
            As you labor for the Lord, we want to partner with you and support you in the specific
            mission God has given you! As you are faithful in your part, we also want to be faithful
            with what God has given us.
            <br />
            <br />
            <br />
            Here are some friends whom we have supported who have gone or are going on short-term
            missions to share the Gospel of Jesus Christ. Join us in praying for these individuals
            and the people they come across, that their obedience to and partnership with the Holy
            Spirit would result in salvation and worship wherever they go!
          </h3>
        ),
        form_active_tab: 'missionaries'
      });
    }
  };

  onContactTabClick = () => {
    if (this.state.form_active_tab !== 'organizations') {
      this.setState({
        form_summary: (
          <h3>
            wowzers
            <br />
            <br />
            <br />
            wowzers
            <br />
            <br />
            <br />
            wowzers
          </h3>
        ),
        form_active_tab: 'organizations'
      });
    }
  };

  render() {
    return (
      <form className='partnerships'>
        <div className='partnerships-tab-container'>
          <div
            className={
              'partnerships-tab ' +
              (this.state.form_active_tab === 'missionaries' ? 'partnerships-active' : '')
            }
            id='missionaries-tab'
            onClick={this.onSubscribeTabClick}>
            <h4>MISSIONARIES</h4>
          </div>
          <div
            className={
              'partnerships-tab ' +
              (this.state.form_active_tab === 'organizations' ? 'partnerships-active' : '')
            }
            id='organizations-tab'
            onClick={this.onContactTabClick}>
            <h4>ORGANIZATIONS</h4>
          </div>
        </div>
        <div className='partnerships-container'>
          <div className='partnerships-content-container'>
            <div className='partnerships-summary'>{this.state.form_summary}</div>
            {this.state.form_active_tab === 'organizations' ? (
              <PartnershipCarouselMobile />
            ) : (
              <PartnershipCarouselMobile />
            )}
          </div>
        </div>
      </form>
    );
  }
}

export default PartnershipsTabs;
