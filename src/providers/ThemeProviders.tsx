import { ReactNode, useEffect, useState } from 'react';
import ThemeContext, { TSelectColor } from '../context/ThemeContext';

const DARK = 'dark';
const LIGHT = 'light';
const KEY_MODE = 'mode';
const KEY_THEME = 'themeColor';

interface IThemeProvidersProps {
  children?: ReactNode;
  selectColor?: TSelectColor;
}

const ThemeProviders = ({ children }: IThemeProvidersProps) => {
  const [isDark, setIsDark] = useState(false);
  const [modalColor, setModalColor] = useState(false);

  const handleIsDark = () => {
    if (!isDark) {
      document.querySelector('body')?.classList.add(DARK);
      window.localStorage.setItem(KEY_MODE, DARK);
    } else {
      document.querySelector('body')?.classList.replace(DARK, LIGHT);
      window.localStorage.setItem(KEY_MODE, LIGHT);
    }
    setIsDark(!isDark);
  };

  const handleModalColor = () => {
    setModalColor(!modalColor);
  };

  const selectColor: TSelectColor = (color) => {
    const body = document.querySelector('body');
    if (!body) {
      return;
    }
    if (isDark) {
      body.className = '';
      body.classList.add(color, DARK);
      window.localStorage.setItem(KEY_THEME, color);
    } else {
      body.className = '';
      body.classList.add(color, LIGHT);
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

    if (mode && color) {
      document.querySelector('body')?.classList.add(mode, color);
    } else {
      document.querySelector('body')?.classList.add(LIGHT, 'red');
    }
  });

  return (
    <ThemeContext.Provider
      value={{ isDark, handleIsDark, modalColor, handleModalColor, selectColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProviders;

