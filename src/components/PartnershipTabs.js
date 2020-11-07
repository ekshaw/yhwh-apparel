import React, { Component } from 'react';
import '../styles/PartnershipTabs.css';
import PartnershipCarouselMobile from './PartnershipCarouselMobile';
import Organizations from '../content/Organizations'
import PartnershipCard from '../components/PartnershipCard'

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
          Here are some friends whom we have supported who have gone or are going on short-term
          missions to share the Gospel of Jesus Christ. Join us in praying for these individuals and
          the people they come across, that their obedience to and partnership with the Holy Spirit
          would result in salvation and worship wherever they go!
        </h3>
      ),
      form_active_tab: 'missionaries',
      missionaries_carousel: <PartnershipCarouselMobile tab='missionaries' />,
      organizations_carousel: <PartnershipCarouselMobile tab='organizations' />
    };
  }

  onMissionariesTabClick = () => {
    if (this.state.form_active_tab !== 'missionaries') {
      this.setState({
        form_summary: (
          <h3>
            As you labor for the Lord, we want to partner with you and support you in the specific
            mission God has given you! As you are faithful in your part, we also want to be faithful
            with what God has given us.
            <br />
            <br />
            Here are some friends whom we have supported who have gone or are going on short-term
            missions to share the Gospel of Jesus Christ. Join us in praying for these individuals
            and the people they come across, that their obedience to and partnership with the Holy
            Spirit would result in salvation and worship wherever they go!
          </h3>
        ),
        form_active_tab: 'missionaries',
      });
    }
  };

  onOrganizationsTabClick = () => {
    if (this.state.form_active_tab !== 'organizations') {
      this.setState({
        form_summary: (
          <h3>
            We love supporting organizations, whether local or global, big or small, as they support 
            the community. Using our talents, time, money, and other resources, we want to show God's 
            love and enable other organizations to do the same and keep up their efforts.
            <br />
            <br />
            To date, we've only partnered with one organization but are always open to supporting more!
            If you are a part of an outreach organization, please contact us. We'd love to talk and get to 
            know you.
          </h3>
        ),
        form_active_tab: 'organizations',
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
            onClick={this.onMissionariesTabClick}>
            <h4>MISSIONARIES</h4>
          </div>
          <div
            className={
              'partnerships-tab ' +
              (this.state.form_active_tab === 'organizations' ? 'partnerships-active' : '')
            }
            id='organizations-tab'
            onClick={this.onOrganizationsTabClick}>
            <h4>ORGANIZATIONS</h4>
          </div>
        </div>
        <div className='partnerships-carousel-container'>
          <div className='partnerships-carousel-content-container'>
            <div className='partnerships-summary'>{this.state.form_summary}</div>
            {this.state.form_active_tab === 'organizations' ? (
              <div className='organization-carousel-container'>
                {Object.keys(Organizations).map(key => (
                <PartnershipCard key={key} index={key} details={Organizations[key]} />
                ))}
              </div>
            ) : (
              this.state.missionaries_carousel
            )}
          </div>
        </div>
      </form>
    );
  }
}

export default PartnershipsTabs;
