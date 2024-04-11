import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Education.css';
import certifications from '../../constants/certifications';

const Education: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {certifications.map(({ src, alt }, index) => {
          return (
            <div key={index}>
              <img src={src} alt={alt} className="style__certifications" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Education;
