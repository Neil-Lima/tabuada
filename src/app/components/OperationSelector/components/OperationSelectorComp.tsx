import React from 'react';
import { OperationSelectorProps } from '../types/OperationSelectorTypes';
import { OperationSelectContainer, OperationSelect } from '../styles/OperationSelectorStyles';

const OperationSelectorComp: React.FC<OperationSelectorProps> = ({ 
  selectedOperation, 
  handleOperationChange 
}) => {
  return (
    <OperationSelectContainer>
      <OperationSelect 
        value={selectedOperation} 
        onChange={handleOperationChange}
        className="form-select-lg mb-3"
      >
        <option value="12">Multiplicação</option>
        <option value="13">Divisão</option>
        <option value="14">Adição</option>
        <option value="15">Subtração</option>
      </OperationSelect>
    </OperationSelectContainer>
  );
};

export default OperationSelectorComp;
