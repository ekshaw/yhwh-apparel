import React, { Component } from 'react';
import Missionaries from '../content/Missionaries';
import PartnershipCard from './PartnershipCard';
import '../styles/PartnershipCarouselMobile.css';

class PartnershipCarouselMobile extends Component {
  constructor() {
    super();

    this.state = {
      cards: {}
    };
  }
  componentWillMount() {
    this.setState({
      cards: Missionaries
    });
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

export default PartnershipCarouselMobile;
