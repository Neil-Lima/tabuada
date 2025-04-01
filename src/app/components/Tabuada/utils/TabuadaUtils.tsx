import { useState, ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { 
  SET_SELECTED_OPERATION, 
  SET_NUMERO, 
  SET_INICIO, 
  SET_FIM, 
  SET_TABUADA_ITEMS, 
  CLEAR_FORM 
} from '../../../redux/tabuadaActionTypes';
import { TabuadaState, TabuadaHandlers, TabuadaOperation } from '../types/TabuadaTypes';

/**
 * Hook personalizado para gerenciar o estado e manipuladores da Tabuada
 * @returns Um array contendo o estado atual e os manipuladores de eventos
 */
export const useTabuadaState = (): [TabuadaState, TabuadaHandlers] => {
  // Acesso ao Redux
  const dispatch = useDispatch();
  const { selectedOperation, numero, inicio, fim, tabuadaItems } = useSelector((state: RootState) => ({
    selectedOperation: state.selectedOperation,
    numero: state.numero,
    inicio: state.inicio,
    fim: state.fim,
    tabuadaItems: state.tabuadaItems
  }));
  
  // Estado local para o tema
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  /**
   * Alterna entre os temas claro e escuro
   */
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }, []);

  /**
   * Atualiza a operação selecionada
   * @param event Evento de mudança do select
   */
  const handleOperationChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: SET_SELECTED_OPERATION, payload: event.target.value });
  }, [dispatch]);

  /**
   * Atualiza o número base da tabuada
   * @param value Novo valor do número
   */
  const handleNumeroChange = useCallback((value: string) => {
    dispatch({ type: SET_NUMERO, payload: value });
  }, [dispatch]);

  /**
   * Atualiza o valor inicial do intervalo
   * @param value Novo valor inicial
   */
  const handleInicioChange = useCallback((value: string) => {
    dispatch({ type: SET_INICIO, payload: value });
  }, [dispatch]);

  /**
   * Atualiza o valor final do intervalo
   * @param value Novo valor final
   */
  const handleFimChange = useCallback((value: string) => {
    dispatch({ type: SET_FIM, payload: value });
  }, [dispatch]);

  /**
   * Calcula os resultados da tabuada com base nos parâmetros atuais
   */
  const handleCalcular = useCallback(() => {
    if (!validateInputs(numero, inicio, fim)) {
      alert('Por favor, preencha os campos corretamente.');
      return;
    }

    const numeroInt = parseInt(numero);
    const inicioInt = parseInt(inicio);
    const fimInt = parseInt(fim);
    
    const items = calculateTabuada(numeroInt, inicioInt, fimInt, selectedOperation as TabuadaOperation);
    dispatch({ type: SET_TABUADA_ITEMS, payload: items });
  }, [dispatch, numero, inicio, fim, selectedOperation]);

  /**
   * Limpa o formulário, resetando para os valores iniciais
   */
  const handleLimpar = useCallback(() => {
    dispatch({ type: CLEAR_FORM });
  }, [dispatch]);

  // Retorna o estado e os manipuladores
  return [
    { selectedOperation, numero, inicio, fim, tabuadaItems, theme },
    { handleOperationChange, handleNumeroChange, handleInicioChange, handleFimChange, handleCalcular, handleLimpar, toggleTheme }
  ];
};

/**
 * Valida se os inputs são números válidos
 * @param numero Número base da tabuada
 * @param inicio Valor inicial do intervalo
 * @param fim Valor final do intervalo
 * @returns true se todos os inputs forem válidos, false caso contrário
 */
const validateInputs = (numero: string, inicio: string, fim: string): boolean => {
  const numeroInt = parseInt(numero);
  const inicioInt = parseInt(inicio);
  const fimInt = parseInt(fim);

  return !isNaN(numeroInt) && !isNaN(inicioInt) && !isNaN(fimInt);
};

/**
 * Calcula os resultados da tabuada com base nos parâmetros fornecidos
 * @param numero Número base da tabuada
 * @param inicio Valor inicial do intervalo
 * @param fim Valor final do intervalo
 * @param operation Operação matemática a ser realizada
 * @returns Array de strings com os resultados formatados
 */
const calculateTabuada = (
  numero: number, 
  inicio: number, 
  fim: number, 
  operation: TabuadaOperation
): string[] => {
  const items: string[] = [];

  for (let i = inicio; i <= fim; i++) {
    const resultado = performOperation(numero, i, operation);
    items.push(formatResult(numero, i, resultado, operation));
  }

  return items;
};

/**
 * Realiza a operação matemática selecionada
 * @param a Primeiro operando
 * @param b Segundo operando
 * @param operation Operação a ser realizada
 * @returns Resultado da operação
 */
const performOperation = (a: number, b: number, operation: TabuadaOperation): number => {
  switch (operation) {
    case '12': return a * b; // Multiplicação
    case '13': return a / b; // Divisão
    case '14': return a + b; // Adição
    case '15': return a - b; // Subtração
    default: return 0;
  }
};

/**
 * Formata o resultado da operação como uma string legível
 * @param a Primeiro operando
 * @param b Segundo operando
 * @param result Resultado da operação
 * @param operation Operação realizada
 * @returns String formatada com a operação e seu resultado
 */
const formatResult = (a: number, b: number, result: number, operation: TabuadaOperation): string => {
  const operationSymbol = getOperationSymbol(operation);
  
  // Formata divisões com duas casas decimais, outros resultados sem casas decimais
  const formattedResult = operation === '13' ? result.toFixed(2) : result.toString();
  
  return `${a} ${operationSymbol} ${b} = ${formattedResult}`;
};

/**
 * Retorna o símbolo correspondente à operação
 * @param operation Código da operação
 * @returns Símbolo da operação (×, ÷, +, -)
 */
const getOperationSymbol = (operation: TabuadaOperation): string => {
  switch (operation) {
    case '12': return 'x';
    case '13': return '/';
    case '14': return '+';
    case '15': return '-';
    default: return '';
  }
};

/**
 * Retorna o nome da operação com base no código
 * @param operation Código da operação
 * @returns Nome da operação
 */
export const getOperationLabel = (operation: string): string => {
  switch (operation) {
    case '12': return 'Multiplicação';
    case '13': return 'Divisão';
    case '14': return 'Adição';
    case '15': return 'Subtração';
    default: return 'Operação';
  }
};
