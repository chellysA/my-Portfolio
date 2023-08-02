import React, { useContext } from 'react';
import './ThemeColor.css';
import { themes } from '../../constants/themes';
import { IoMdColorPalette } from 'react-icons/io';
import Modal from '../Modal';
import ThemeButton from '../ThemeButton';
import ThemeContext from '../../context/ThemeContext';

const ThemeColor = () => {
  const { modalColor, handleModalColor, selectColor } = useContext(ThemeContext);

  return (
    <>
      <ThemeButton
        className="toggle__theme"
        onClickTheme={handleModalColor}
        icon={<IoMdColorPalette className="icon" />}
      />
      <Modal isOpen={modalColor} onClose={handleModalColor}>
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

