import styled from 'styled-components';
import { Button, ButtonProps } from 'react-bootstrap';
import { CustomTheme } from '../../../theme/types/ThemeTypes';

interface StyledButtonProps extends ButtonProps {
  theme: CustomTheme;
}

export const StyledButton = styled(Button)<StyledButtonProps>`
  background-color: ${props => props.theme.buttonBackground};
  border-color: ${props => props.theme.buttonBorder};
  color: ${props => props.theme.buttonText};
  min-width: 120px;
  
  &:hover {
    background-color: ${props => props.theme.buttonHoverBackground};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;
