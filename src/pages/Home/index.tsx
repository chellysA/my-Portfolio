import React, {useState, useEffect} from 'react';
import mifoto from '../../assets/photos/mifoto.png';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const word = "Front-end Developer";
  const [typeWords, setTypeWords] = useState('');
  const [remainingLetters, setRemainingLetters] = useState(word);

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingLetters.length) {
        setTypeWords(typeWords + remainingLetters[0]);
        setRemainingLetters(remainingLetters.substring(1));
      } else {
        clearInterval(interval);
      }
    }, 140);
    return () => clearInterval(interval);
  }, [typeWords, remainingLetters]);

  return (
    <section className="home section grid">
      <img src={mifoto} alt="profile picture" className="style__img" data-aos="zoom-in" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title" data-aos="fade-right" data-aos-delay="500">
              <span>I'm Chellys Castillo</span>
            <div 
            >{typeWords}</div>
          </h1>
          <p className="home__description" data-aos="fade" data-aos-delay="2800" >
            A persistant learner, i'm passionate about building excellent software that improves the
            lives of those around me.
          </p>
          <Link to="/about" className="button" data-aos="zoom-in"  data-aos-duration="2000" data-aos-delay="3000" data-aos-easing="ease-in-out-back">
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
