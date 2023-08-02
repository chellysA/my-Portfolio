import React from 'react';
import { projects } from '../../constants/projects';
import ProjectItem from '../../components/ProjectItem';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>

      <div className="portfolio__container container grid">
        {projects.map((item) => {
          return <ProjectItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
export default Portfolio;

