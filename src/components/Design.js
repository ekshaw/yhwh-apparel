import React, { Component } from 'react';

class Design extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDesign: true
    };
  }

  toggleDesign = () => {
    this.setState({ showDesign: !this.state.showDesign });
  };

  render() {
    let body = null;
    if (this.state.showDesign) {
      body = <img src={this.props.design.imgSrc} alt='' />;
    } else {
      body = (
        <div className='design-description'>
          <h3>{this.props.design.title}</h3>
          <p className='design-description__release'>
            {'Released ' + this.props.design.release}
          </p>
          <div className='description-wrap'>
            <div className='actual-description'>
              {this.props.design.description}
            </div>
            <div class='cover-bar' />
          </div>
        </div>
      );
    }

    return (
      <div className='design-container'>
        <div className='design' onClick={this.toggleDesign}>
          {body}
        </div>
      </div>
    );
  }
}

export default Design;
