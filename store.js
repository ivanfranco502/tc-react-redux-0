import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import reducer from './reducer';

// Configuracion extra, middleware, etc. acá

const store = createStore(reducer)


export default store;
