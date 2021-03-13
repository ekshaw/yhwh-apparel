import React, { Component } from 'react';
import Designs from '../content/Designs';
import DesignCard from './DesignCard';
import '../styles/DesignCarouselMobile.css';

class DesignCarouselMobile extends Component {
  constructor() {
    super();

    this.state = {
      cards: {}
    };
  }
  componentWillMount() {
    this.setState({
      cards: Designs
    });
  }

  render() {
    return (
      <div className='design-scrolling-wrapper'>
        {Object.keys(this.state.cards).map(key => (
          <DesignCard key={key} index={key} details={this.state.cards[key]} />
        ))}
      </div>
    );
  }
}

export default DesignCarouselMobile;
