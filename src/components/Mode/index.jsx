import React, { useState } from 'react';
import ThemeButton from '../ThemeButton';
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import './Mode.css';

const Mode = () => {
  const [mode, setMode] = useState(false);

  const switchMode = () => {
    setMode(!mode);
    document.querySelector('body').className = '';
    !mode && document.querySelector('body').classList.add('dark');
  };

  return (
    <>
      <ThemeButton
        className="mode"
        onClickTheme={switchMode}
        icon={mode ? <CiLight className="icon sun" /> : <MdDarkMode className="icon moon" />}
      />
    </>
  );
};

export default Mode;

