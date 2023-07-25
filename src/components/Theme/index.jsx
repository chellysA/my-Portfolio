import React, { useState } from 'react';
import './Theme.css';
import { themes } from '../../constants/themes';
import { IoMdColorPalette } from 'react-icons/io';
import Modal from '../Modal';

const Theme = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const selectColor = (color) => {
    console.log(document.querySelector('body'));
    document.querySelector('body').className = '';
    document.querySelector('body').classList.add(color);
  };
  return (
    <>
      <div className="toggle__theme" onClick={toggleModal}>
        <IoMdColorPalette className="icon" />
      </div>
      <Modal isOpen={modal} onClose={toggleModal}>
        <h2 className="theme__title">
          Choose a <span className="span__color">color</span>
        </h2>
        <div className="theme__container grid">
          {themes.map(({ img, color }, index) => {
            return (
              <div key={index} onClick={() => selectColor(color)}>
                <img src={img} alt={color} />
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
};
export default Theme;

