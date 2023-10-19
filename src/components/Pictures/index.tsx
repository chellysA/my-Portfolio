import React from 'react';
import { album } from '../../constants/album';
import './Pictures.css';

const Pictures: React.FC = () => {
  return (
    <>
      {album.map(({ src, alt }, index) => {
        return (
          <div key={index}>
            <img src={src} alt={alt} className="style__img" data-aos="flip-left"/>
          </div>
        );
      })}
    </>
  );
};

export default Pictures;

