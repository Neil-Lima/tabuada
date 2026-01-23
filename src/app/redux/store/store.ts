import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import tabuadaReducer from '../reducers/tabuadaReducer';

// Criação da store com suporte ao Redux DevTools
const store = createStore(
  tabuadaReducer,
  composeWithDevTools()
);

// Definição do tipo RootState para uso em useSelector
export type RootState = ReturnType<typeof store.getState>;

export default store;
