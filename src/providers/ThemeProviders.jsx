import { useEffect, useState } from 'react';
import ThemeContext from '../context/ThemeContext';

const DARK = 'dark';
const LIGHT = 'light';
const KEY_MODE = 'mode';
const KEY_THEME = 'themeColor';

const ThemeProviders = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [modalColor, setModalColor] = useState(false);

  const handleIsDark = () => {
    if (!isDark) {
      document.querySelector('body').classList.add(DARK);
      window.localStorage.setItem(KEY_MODE, DARK);
    } else {
      document.querySelector('body').classList.replace(DARK, LIGHT);
      window.localStorage.setItem(KEY_MODE, LIGHT);
    }
    setIsDark(!isDark);
  };

  const handleModalColor = () => {
    setModalColor(!modalColor);
  };

  const selectColor = (color) => {
    if (isDark) {
      document.querySelector('body').className = '';
      document.querySelector('body').classList.add(color, DARK);
      window.localStorage.setItem(KEY_THEME, color);
    } else {
      document.querySelector('body').className = '';
      document.querySelector('body').classList.add(color, LIGHT);
      window.localStorage.setItem(KEY_THEME, color);
    }
  };

  useEffect(() => {
    const mode = window.localStorage.getItem(KEY_MODE);
    const color = window.localStorage.getItem(KEY_THEME);
    if (mode === DARK) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
    document.querySelector('body').classList.add(mode, color);
  });

  return (
    <ThemeContext.Provider
      value={{ isDark, handleIsDark, modalColor, handleModalColor, selectColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProviders;

