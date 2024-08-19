import { createStore } from 'redux';
import tabuadaReducer from './tabuadaReducer';

export type RootState = ReturnType<typeof tabuadaReducer>;

const store = createStore(tabuadaReducer);

export default store;
