import { ChangeEvent } from 'react';
import { CustomTheme } from '../../../theme/types/ThemeTypes';

export type TabuadaOperation = '12' | '13' | '14' | '15';

export interface TabuadaProps {
  // Se houver props específicas para o componente principal
}

export interface TabuadaState {
  selectedOperation: string;
  numero: string;
  inicio: string;
  fim: string;
  tabuadaItems: string[];
  theme: 'light' | 'dark';
}

export interface TabuadaHandlers {
  handleOperationChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleNumeroChange: (value: string) => void;
  handleInicioChange: (value: string) => void;
  handleFimChange: (value: string) => void;
  handleCalcular: () => void;
  handleLimpar: () => void;
  toggleTheme: () => void;
}
