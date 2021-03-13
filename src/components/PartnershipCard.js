import React, { Component } from 'react';
import '../styles/PartnershipCard.css';

class PartnershipCardContent extends Component {
  render() {
    return (
      <div className='mobile-partnerships-card-item'>
        <h2 className='.mobile-partnerships-card-caption'>{this.props.title}</h2>
        <h3 className='mobile-partnerships-card-location'>{this.props.location} </h3>
        <h3 className='mobile-partnerships-card-date'>{this.props.date}</h3>

        <img className='mobile-partnerships-card-image' src={this.props.image} />
        <div className='mobile-partnerships-card-description'>
          <h3>{this.props.text}</h3>
        </div>
      </div>
    );
  }
}

class PartnershipCard extends Component {
  render() {
    return (
      <article className='mobile-partnerships-card-item-container'>
        <PartnershipCardContent
          title={this.props.details.title}
          image={this.props.details.imgSrc}
          date={this.props.details.date}
          location={this.props.details.location}
          text={this.props.details.mobileDescription ? this.props.details.mobileDescription : this.props.details.description}
        />
      </article>
    );
  }
}

export default PartnershipCard;
