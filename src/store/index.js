import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

import counterReducer from './counter/reducer';
import prestamoReducer from './prestamo/reducer';
import customerManagerReducer from './customer-manager/reducer';

const reducers = combineReducers({
  counter: counterReducer,
  prestamo: prestamoReducer,
  customerManager: customerManagerReducer
});

const middlewares = applyMiddleware(
  thunk,
  promiseMiddleware(),
  logger
);

const store = createStore(reducers, middlewares);

export default store;
