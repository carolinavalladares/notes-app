import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useDarkMode } from "../../hooks/useDarkMode";
import SunIcon from "../../assets/Icons/SunIcon";
import MoonIcon from "../../assets/Icons/MoonIcon";
const ThemeSwitch = () => {
  const { darkMode, changeDarkMode } = useDarkMode();
  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add("dark");
    } else if (darkMode === false) {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  const handleDarkMode = () => {
    changeDarkMode(!darkMode);
  };

  return (
    <button
      title="Dark Mode"
      onClick={handleDarkMode}
      className={`${styles.switch} ${darkMode ? styles.active : null}`}
    >
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeSwitch;
