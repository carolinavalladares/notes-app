import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add("dark");
    } else if (darkMode === false) {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const changeDarkMode = (value) => {
    setDarkMode(value);
  };

  return { darkMode, changeDarkMode };
};
