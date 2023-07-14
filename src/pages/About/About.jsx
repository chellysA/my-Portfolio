import React from 'react';
import Info from '../../components/Info';
import { FaDownload } from 'react-icons/fa';
import './About.css';
import Pictures from '../../components/Pictures';

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>
        <div className="about__container grid">
          <Pictures />
          <div className="about__info">
            <h3 className="section__subtitle">Personal Info</h3>
            <ul className="list__info grid">
              <Info />
            </ul>
            <div>
              <a href="" download="" className="button">
                Download CV
                <span className="button__icon">
                  <FaDownload />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="pictures"></div>
      </section>
    </main>
  );
};
export default About;

