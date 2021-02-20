import React, { Component } from 'react';
import Missionaries from '../content/Missionaries';
import Organizations from '../content/Organizations';
import PartnershipCard from './PartnershipCard';
import '../styles/PartnershipCarouselMobile.css';

class OrganizationsCarouselMobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: Organizations
    };
  }

  render() {
    return (
      <div className='partnership-scrolling-wrapper'>
        {Object.keys(this.state.cards).map(key => (
          <PartnershipCard key={key} index={key} details={this.state.cards[key]} />
        ))}
      </div>
    );
  }
}

export default OrganizationsCarouselMobile;
