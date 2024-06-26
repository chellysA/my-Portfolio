import React, { useEffect } from 'react';
import Info from '../../components/Info';
import { FaDownload } from 'react-icons/fa';
import './About.css';
import Pictures from '../../components/Pictures';
import Skills from '../../components/Skills';
import Education from '../../components/Education';
import cvChellysCastillo from '../../assets/cv/cvChellys.pdf';

const About: React.FC = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title" data-aos="fade-right">
          About <span>Me</span>
        </h2>
        <div className="about__container grid">
          <Pictures />
          <div className="about__info">
            <h3 className="info__subtitle">Personal Info</h3>
            <ul className="list__info grid">
              <Info />
            </ul>
            <div data-aos="zoom-in-down" data-aos-easing="ease-in-out-back">
              <a href={cvChellysCastillo} download="cvChellysCastillo" className="button">
                Download CV
                <span className="button__icon">
                  <FaDownload />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section__subtitle">My Skills</h3>
        <Skills />
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section__subtitle">Education</h3>
        <Education />
      </section>
    </main>
  );
};
export default About;

