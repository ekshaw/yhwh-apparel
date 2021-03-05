import React, { Component } from 'react';
import Missionaries from '../content/Missionaries';
import PartnershipCard from './PartnershipCard';
import '../styles/PartnershipCarouselMobile.css';

class MissionariesCarouselMobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: Missionaries
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

export default MissionariesCarouselMobile;
