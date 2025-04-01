import styled from 'styled-components';
import { Card, Container } from 'react-bootstrap';
import { CustomTheme } from '../../../theme/types/ThemeTypes';

export const TabuadaContainer = styled(Container)`
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const TabuadaCard = styled(Card)<{ theme: CustomTheme }>`
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

export const TabuadaTitle = styled.h1<{ themeType: 'light' | 'dark' }>`
  text-align: center;
  margin-bottom: 1.5rem;
  color: ${props => props.themeType === 'light' ? '#007bff' : '#17a2b8'};
`;

export const TabuadaSubtitle = styled.h4<{ themeType: 'light' | 'dark' }>`
  text-align: center;
  margin-bottom: 1.5rem;
  color: ${props => props.themeType === 'light' ? '#6c757d' : '#adb5bd'};
`;
