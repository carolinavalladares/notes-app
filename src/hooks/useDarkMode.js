import { useState } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const changeDarkMode = (value) => {
    setDarkMode(value);
  };

  return { darkMode, changeDarkMode };
};
