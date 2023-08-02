import { useEffect } from 'react';

const useVerifyTheme = () => {
  useEffect(() => {
    const themeColor = window.localStorage.getItem('themeColor');
    if (themeColor) {
      document.querySelector('body').classList.add(themeColor);
    }
  });
};

export default useVerifyTheme;

