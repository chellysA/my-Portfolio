import React from 'react';
import { album } from '../constants/album';
import { HiCursorClick } from 'react-icons/hi';
import './Pictures.css';
// al hacer click cambie de foto
const Pictures = () => {
  return (
    <>
      {album.map(({ src, alt }, index) => {
        return (
          <div key={index}>
            <img src={src} alt={alt} className="style__img" />
            <button className="button picture">
              Click Me
              <HiCursorClick className="pic__icon" />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Pictures;

