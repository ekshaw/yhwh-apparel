import React, { Component } from 'react';
import Slider from 'react-slick';
import iam from '../carousel-imgs/iam.jpg';
import iamGroup from '../carousel-imgs/iam-group.jpg';
import yumi from '../carousel-imgs/yumi.jpg';

const carouselImgs = [ iam, iamGroup, yumi ];

class Home extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };

    return (
      <div className='home'>
        <div className='home-carousel'>
          <Slider {...settings}>
            {carouselImgs.map((carouselImg, index) =>
              <div className='home-carousel-img'>
                <img src={carouselImg} alt='' />
              </div>
            )}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Home;
