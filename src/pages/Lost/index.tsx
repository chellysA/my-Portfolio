import React from 'react';
import lostImg from '../../assets/logos/lostImg.png';
import { FaArrowRight } from 'react-icons/fa';
import './Lost.css';

const Lost: React.FC = () => {
  return (
    <section className="Lost section">
      <img src={lostImg} alt="profile picture" className="lost__img" />
      <div className="Lost__content">
        <div className="Lost__data">
          <h1 className="Lost__title">
            <span>Oops!!</span> Page not found.
          </h1>
          <p className="Lost__description">
            Choose a path in the menu on the right of your screen.
          </p>
          <FaArrowRight className="lost__icon" />
        </div>
      </div>
    </section>
  );
};
export default Lost;

