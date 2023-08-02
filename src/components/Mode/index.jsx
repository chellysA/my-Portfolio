import React, { useContext } from 'react';
import ThemeButton from '../ThemeButton';
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import './Mode.css';
import ThemeContext from '../../context/ThemeContext';

const Mode = () => {
  const { isDark, handleIsDark } = useContext(ThemeContext);

  return (
    <>
      <ThemeButton
        className="mode"
        onClickTheme={handleIsDark}
        icon={isDark ? <CiLight className="icon sun" /> : <MdDarkMode className="icon moon" />}
      />
    </>
  );
};

export default Mode;

