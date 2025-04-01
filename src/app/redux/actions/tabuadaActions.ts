import {
    SET_SELECTED_OPERATION,
    SET_NUMERO,
    SET_INICIO,
    SET_FIM,
    SET_TABUADA_ITEMS,
    CLEAR_FORM,
    TabuadaAction
  } from '../types/tabuadaActionTypes';
  
  /**
   * Define a operação matemática selecionada
   * @param operation Código da operação selecionada
   */
  export const setSelectedOperation = (operation: string): TabuadaAction => ({
    type: SET_SELECTED_OPERATION,
    payload: operation
  });
  
  /**
   * Define o número base para a tabuada
   * @param numero Número base
   */
  export const setNumero = (numero: string): TabuadaAction => ({
    type: SET_NUMERO,
    payload: numero
  });
  
  /**
   * Define o valor inicial do intervalo
   * @param inicio Valor inicial
   */
  export const setInicio = (inicio: string): TabuadaAction => ({
    type: SET_INICIO,
    payload: inicio
  });
  
  /**
   * Define o valor final do intervalo
   * @param fim Valor final
   */
  export const setFim = (fim: string): TabuadaAction => ({
    type: SET_FIM,
    payload: fim
  });
  
  /**
   * Define os itens calculados da tabuada
   * @param items Array de strings com os resultados
   */
  export const setTabuadaItems = (items: string[]): TabuadaAction => ({
    type: SET_TABUADA_ITEMS,
    payload: items
  });
  
  /**
   * Limpa o formulário, resetando para os valores iniciais
   */
  export const clearForm = (): TabuadaAction => ({
    type: CLEAR_FORM
  });
  