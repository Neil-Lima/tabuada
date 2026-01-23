import { ChangeEvent } from 'react';

export type TabuadaOperation = '12' | '13' | '14' | '15';

export interface OperationSelectorProps {
  selectedOperation: TabuadaOperation | string;
  handleOperationChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
