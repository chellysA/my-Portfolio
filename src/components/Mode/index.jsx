import React, { useState } from 'react';
import ThemeButton from '../ThemeButton';
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import './Mode.css';

const Mode = () => {
  const [mode, setMode] = useState(false);

  const switchMode = () => {
    setMode(!mode);
    if (!mode) {
      document.querySelector('body').classList.add('dark');
    } else {
      document.querySelector('body').classList.replace('dark', 'light');
    }
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

