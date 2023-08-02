import React from 'react';
import { personalInfo1, personalInfo2 } from '../../constants/personalInfo';
import './Info.css';

const Info: React.FC = () => {
  return (
    <>
      <div>
        {personalInfo1.map(({ title, description }, index) => {
          return (
            <li className="info__item" key={index}>
              <span className="info__title">{title}</span>
              <span className="info__descript">{description}</span>
            </li>
          );
        })}
      </div>
      <div>
        {personalInfo2.map(({ title, description }, index) => {
          return (
            <li className="info__item" key={index}>
              <span className="info__title">{title}</span>
              <span className="info__descript">{description}</span>
            </li>
          );
        })}
      </div>
    </>
  );
};
export default Info;

