import React, { Component } from 'react';

class Missionary extends Component {
  render() {
    return (
      <div className={this.props.odd ? 'missionary' : 'missionary missionary--odd'}>
        <div className='missionary-profile'>
          <img src={this.props.missionary.imgSrc} alt=''/>
        </div>
        <div className='missionary-description'>
          <div>
            <h3>{this.props.missionary.name}</h3>
            <div className='missionary-info'>
              <p>{this.props.missionary.location}</p>
              <p>{this.props.missionary.date}</p>
            </div>
            {this.props.missionary.description}
          </div>
        </div>
      </div>
    );
  }
}

export default Missionary;
