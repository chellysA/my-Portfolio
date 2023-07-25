import React from 'react';
import './Theme.css';
import theme from '../../constants/theme';

const Theme = () => {
  return (
    <div className="theme__container">
      {theme.map(({ id, img, color }, index) => {
        return (
          <div key={index}>
            <img src={img} alt={color} className="color__box" />
          </div>
        );
      })}
    </div>
  );
};
export default Theme;

