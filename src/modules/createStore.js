import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware());

export default store;
