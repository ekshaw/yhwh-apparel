import React, { Component } from 'react';
import Missionaries from '../content/Missionaries';
import Organizations from '../content/Organizations'
import PartnershipCard from './PartnershipCard';
import '../styles/PartnershipCarouselMobile.css';

class PartnershipCarouselMobile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: this.props.tab === 'organizations' ? Organizations : Missionaries 
    };
    console.log(this.state.cards)
  }

  componentWillMount() {
    // if (this.props.tab === 'organizations') {
    //   this.setState({
    //     cards: Organizations
    //   });
    // } else {
    //   this.setState({
    //     cards: Missionaries
    //   });
    // }
    
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
