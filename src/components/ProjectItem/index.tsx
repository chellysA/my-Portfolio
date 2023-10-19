import React, { useState } from 'react';
import Modal from '../Modal';
import parse from 'html-react-parser';
import { useIsMobile } from '../../hooks/useIsMobile';

interface ProjectItemProps {
  img: string;
  title: string;
  details: { icon: React.JSX.Element; title: string; desc: string }[];
}

const ProjectItem = ({ img, title, details }: ProjectItemProps) => {
  const [modal, setModal] = useState<boolean>(false);
  const mobile = useIsMobile()

  const toggleModal = () => {
    setModal(!modal);
  };
console.log(mobile)
  return (
    <>
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
        <img src={img} alt="" data-aos="zoom-in" data-aos-delay="200"/>
      </Modal>
      <div onClick={toggleModal} className="portfolio__item" data-aos="zoom-in" data-aos-easing="ease-in-out-back" data-aos-duration="1500">
        <img src={img} alt="" className="portfolio__img" />

       {!mobile && <div className="portfolio__hover" >
          <h3 className="portfolio__title">{title}</h3>
        </div>}
      </div>
    </>
  );
};

export default ProjectItem;
