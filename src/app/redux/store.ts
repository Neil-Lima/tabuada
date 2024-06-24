// src/redux/store.ts

import { createStore } from 'redux';
import tabuadaReducer from './tabuadaReducer';

const store = createStore(tabuadaReducer);

export default store;
