import { createContext } from 'react';

export type TSelectColor = (color: string) => void;

interface IThemeContextProps {
  isDark: boolean;
  modalColor: boolean;
  handleModalColor: () => void;
  selectColor: TSelectColor;
  handleIsDark: () => void;
}

const ThemeContext = createContext<IThemeContextProps>({
  isDark: false,
  handleIsDark: () => {},
  modalColor: false,
  handleModalColor: () => {},
  selectColor: (color) => '',
});

export default ThemeContext;

