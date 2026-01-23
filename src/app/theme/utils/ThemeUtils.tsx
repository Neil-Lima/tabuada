import { CustomTheme } from '../types/ThemeTypes';

export const lightTheme: CustomTheme = {
  gradient: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
  text: '#363537',
  cardBackground: 'rgba(255, 255, 255, 0.9)',
  buttonBackground: '#007BFF',
  buttonBorder: '#007BFF',
  buttonText: '#FFF',
  buttonHoverBackground: '#0056b3',
};

export const darkTheme: CustomTheme = {
  gradient: 'linear-gradient(120deg, #20202c 0%, #515175 100%)',
  text: '#FAFAFA',
  cardBackground: 'rgba(42, 43, 45, 0.9)',
  buttonBackground: '#17A2B8',
  buttonBorder: '#17A2B8',
  buttonText: '#FFF',
  buttonHoverBackground: '#138496',
};
