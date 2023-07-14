import React, { useEffect, useState } from 'react';
import mifoto from '../../assets/mifoto.png';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';

// Add type animation to the home__title

const Home = () => {
  return (
    <section className="home section grid">
      <img src={mifoto} alt="profile picture" className="style__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Chellys Castillo</span> Front-end Developer
          </h1>
          <p className="home__description">
            A persistant learner, i'm passionate about building excellent software that improves the
            lives of those around me.
          </p>
          <Link to="/about" className="button">
            More About Me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};
export default Home;

