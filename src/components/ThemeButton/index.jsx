import React from 'react';

const ThemeButton = ({ className, icon, onClickTheme }) => {
  return (
    <div className={className} onClick={onClickTheme}>
      <div>{icon}</div>
    </div>
  );
};
export default ThemeButton;

