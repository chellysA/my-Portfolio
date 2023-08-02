import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logos from '../../constants/logos';
import './Skills.css';

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {logos.map(({ src, alt }, index) => {
          return (
            <div key={index}>
              <img src={src} alt={alt} className="style__logo" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Skills;

