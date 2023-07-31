import React, { useState } from 'react';
import './ThemeColor.css';
import { themes } from '../../constants/themes';
import { IoMdColorPalette } from 'react-icons/io';
import Modal from '../Modal';
import ThemeButton from '../ThemeButton';

const ThemeColor = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const selectColor = (color) => {
    if (document.querySelector('body').classList.contains('dark')) {
      document.querySelector('body').className = '';
      document.querySelector('body').classList.add(color, 'dark');
    }
    if (
      document.querySelector('body').classList.contains('light') ||
      document.querySelector('body').className == ''
    ) {
      document.querySelector('body').className = '';
      document.querySelector('body').classList.add(color, 'light');
    }
  };
  return (
    <>
      <ThemeButton
        className="toggle__theme"
        onClickTheme={toggleModal}
        icon={<IoMdColorPalette className="icon" />}
      />
      <Modal isOpen={modal} onClose={toggleModal}>
        <h2 className="theme__title">
          Choose a <span className="span__color">color</span>
        </h2>
        <div className="theme__container grid">
          {themes.map(({ img, color }, index) => {
            return (
              <div key={index} onClick={() => selectColor(color)}>
                <img src={img} alt={color} className="theme__img" />
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
};
export default ThemeColor;

