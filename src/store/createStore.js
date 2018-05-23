import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducers';

const store = createStore(reducer, applyMiddleware());

export default store;
