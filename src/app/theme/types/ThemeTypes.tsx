import { DefaultTheme } from 'styled-components';

export interface CustomTheme extends DefaultTheme {
  gradient: string;
  text: string;
  cardBackground: string;
  buttonBackground: string;
  buttonBorder: string;
  buttonText: string;
  buttonHoverBackground: string;
}

export interface ThemeToggleProps {
  theme: CustomTheme;
  toggleTheme: () => void;
  currentTheme: 'light' | 'dark';
}
