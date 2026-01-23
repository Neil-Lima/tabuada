import { CustomTheme } from '../../../theme/types/ThemeTypes';

export interface InputFieldsProps {
  theme: CustomTheme;
  numero: string;
  inicio: string;
  fim: string;
  onNumeroChange: (value: string) => void;
  onInicioChange: (value: string) => void;
  onFimChange: (value: string) => void;
}
