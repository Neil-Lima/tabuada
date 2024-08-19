export const SET_SELECTED_OPERATION = 'SET_SELECTED_OPERATION';
export const SET_NUMERO = 'SET_NUMERO';
export const SET_INICIO = 'SET_INICIO';
export const SET_FIM = 'SET_FIM';
export const SET_TABUADA_ITEMS = 'SET_TABUADA_ITEMS';
export const CLEAR_FORM = 'CLEAR_FORM';

export type TabuadaAction =
  | { type: typeof SET_SELECTED_OPERATION; payload: string }
  | { type: typeof SET_NUMERO; payload: string }
  | { type: typeof SET_INICIO; payload: string }
  | { type: typeof SET_FIM; payload: string }
  | { type: typeof SET_TABUADA_ITEMS; payload: string[] }
  | { type: typeof CLEAR_FORM };
