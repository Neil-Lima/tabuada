import styled, { createGlobalStyle } from 'styled-components';
import { CustomTheme } from '../types/ThemeTypes';

export const GlobalStyles = createGlobalStyle<{ theme: CustomTheme }>`
  body {
    background: ${props => props.theme.gradient};
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
    min-height: 100vh;
  }
`;

export const ThemeToggleButton = styled.button<{ theme: CustomTheme }>`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.text};
  z-index: 1000;
`;
