import styled from 'styled-components';
import { Card, ListGroup } from 'react-bootstrap';
import { CustomTheme } from '../../../theme/types/ThemeTypes';

export const ResultCard = styled(Card)<{ theme: CustomTheme }>`
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
  margin-top: 1.5rem;
`;

export const ResultItem = styled(ListGroup.Item)`
  background-color: transparent;
  color: inherit;
  display: flex;
  justify-content: between;
  align-items: center;
`;
