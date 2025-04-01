import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeToggleButton } from '../styles/ThemeStyles';
import { ThemeToggleProps } from '../types/ThemeTypes';

const ThemeToggleComp: React.FC<ThemeToggleProps> = ({ theme, toggleTheme, currentTheme }) => {
  return (
    <ThemeToggleButton onClick={toggleTheme} theme={theme}>
      {currentTheme === 'light' ? <FaMoon /> : <FaSun />}
    </ThemeToggleButton>
  );
};

export default ThemeToggleComp;
