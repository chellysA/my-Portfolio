import React from 'react';

interface ThemeButtonProps {
  className: string;
  onClickTheme: () => void;
  icon: React.JSX.Element;
}

const ThemeButton = ({ className, icon, onClickTheme }: ThemeButtonProps) => {
  return (
    <div className={className} onClick={onClickTheme}>
      <div>{icon}</div>
    </div>
  );
};
export default ThemeButton;

