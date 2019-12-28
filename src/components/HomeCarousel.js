import React, { Component } from 'react';

class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  componentDidMount() {
    this.setTimer();
  }

  setTimer() {
    this.timer = setTimeout(() => {
      this.goToNextSlide();
    }, 5000);
  }

  goToSlide = index => {
    this.setState({ activeIndex: index });
    clearTimeout(this.timer);
    this.setTimer();
  };

  goToNextSlide = () => {
    let index = this.state.activeIndex;
    index = (index + 1) % this.props.slides.length;
    this.goToSlide(index);
    this.setTimer();
  };

  render() {
    return (
      <div className='home-carousel'>
        {this.props.slides.map((slide, index) => (
          <div
            className={
              index === this.state.activeIndex
                ? 'home-carousel__slide home-carousel__slide--active'
                : 'home-carousel__slide'
            }
            key={index}
            style={{ zIndex: `${-1 * index}` }}
          >
            <img src={slide} alt='' />
          </div>
        ))}
        <div className='home-carousel__btns'>
          <ul>
            {this.props.slides.map((slide, index) => (
              <li
                className={
                  index === this.state.activeIndex
                    ? 'home-carousel__btn--active'
                    : ''
                }
                key={index}
                onClick={() => this.goToSlide(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default HomeCarousel;
