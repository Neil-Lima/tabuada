import React from 'react';
import { FaCalculator, FaEraser } from 'react-icons/fa';
import { ActionButtonsProps } from '../types/ActionButtonsTypes';
import { StyledButton, ButtonContainer } from '../styles/ActionButtonsStyles';

const ActionButtonsComp: React.FC<ActionButtonsProps> = ({ theme, onCalcular, onLimpar }) => {
  return (
    <ButtonContainer>
      <StyledButton 
        className="btn-lg me-3" 
        onClick={onCalcular}
        theme={theme}
      >
        <FaCalculator className="me-2" /> Calcular
      </StyledButton>
      <StyledButton 
        className="btn-lg" 
        onClick={onLimpar}
        theme={theme}
      >
        <FaEraser className="me-2" /> Limpar
      </StyledButton>
    </ButtonContainer>
  );
};

export default ActionButtonsComp;
