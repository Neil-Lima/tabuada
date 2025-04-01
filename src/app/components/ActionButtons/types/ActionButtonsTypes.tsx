import { CustomTheme } from '../../../theme/types/ThemeTypes';

export interface ActionButtonsProps {
  theme: CustomTheme;
  onCalcular: () => void;
  onLimpar: () => void;
}
