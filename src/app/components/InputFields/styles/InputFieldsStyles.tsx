import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { CustomTheme } from '../../../theme/types/ThemeTypes';

export const InputCard = styled(Card)<{ theme: CustomTheme }>`
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
  height: 100%;
`;
