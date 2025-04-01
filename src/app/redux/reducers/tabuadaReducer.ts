import { 
    TabuadaAction, 
    TabuadaState,
    SET_SELECTED_OPERATION, 
    SET_NUMERO, 
    SET_INICIO, 
    SET_FIM, 
    SET_TABUADA_ITEMS, 
    CLEAR_FORM 
  } from '../types/tabuadaActionTypes';
  
  /**
   * Estado inicial da aplicação
   */
  const initialState: TabuadaState = {
    selectedOperation: '12', // Multiplicação como padrão
    numero: '',
    inicio: '',
    fim: '',
    tabuadaItems: [],
  };
  
  /**
   * Reducer para gerenciar o estado da Tabuada
   * @param state Estado atual
   * @param action Ação a ser processada
   * @returns Novo estado
   */
  const tabuadaReducer = (state = initialState, action: TabuadaAction): TabuadaState => {
    switch (action.type) {
      case SET_SELECTED_OPERATION:
        return { 
          ...state, 
          selectedOperation: action.payload 
        };
        
      case SET_NUMERO:
        return { 
          ...state, 
          numero: action.payload 
        };
        
      case SET_INICIO:
        return { 
          ...state, 
          inicio: action.payload 
        };
        
      case SET_FIM:
        return { 
          ...state, 
          fim: action.payload 
        };
        
      case SET_TABUADA_ITEMS:
        return { 
          ...state, 
          tabuadaItems: action.payload 
        };
        
      case CLEAR_FORM:
        return { 
          ...initialState 
        };
        
      default:
        return state;
    }
  };
  
  export default tabuadaReducer;
  