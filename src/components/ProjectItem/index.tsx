import React, { useState } from 'react';
import Modal from '../Modal';
import parse from 'html-react-parser';

interface ProjectItemProps {
  img: string;
  title: string;
  details: { icon: React.JSX.Element; title: string; desc: string }[];
}

const ProjectItem = ({ img, title, details }: ProjectItemProps) => {
  const [modal, setModal] = useState<boolean>(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="portfolio__item">
      <img src={img} alt="" className="portfolio__img" />

      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>

      <Modal isOpen={modal} onClose={toggleModal}>
        <h3 className="modal__title">{title}</h3>
        <ul className="modal__list grid">
          {details.map(({ icon, title, desc }, index) => {
            return (
              <li className="modal__item" key={index}>
                <span className="item__icon">{icon}</span>

                <div>
                  <span className="item__title">{title}</span>
                  <span className="item__details">{parse(desc)}</span>
                </div>
              </li>
            );
          })}
        </ul>
        <img src={img} alt="" />
      </Modal>
    </div>
  );
};

export default ProjectItem;

