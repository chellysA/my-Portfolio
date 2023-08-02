import { createContext } from 'react';

const ThemeContext = createContext({
  isDark: false,
  handlerIsDark: () => {},
  modalColor: false,
  handleModalColor: () => {},
  selectColor: () => {},
});

export default ThemeContext;

