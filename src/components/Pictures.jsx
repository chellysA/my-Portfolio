import React from 'react';
import { album } from '../constants/album';
import './Pictures.css';
import Slider from 'react-slick';

const Pictures = () => {
  return (
    <>
      {album.map(({ src, alt }, index) => {
        return (
          <div key={index}>
            <img src={src} alt={alt} className="style__img" />
          </div>
        );
      })}
    </>
  );
};

export default Pictures;

