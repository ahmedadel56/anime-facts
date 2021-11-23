import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import anmiesReducer from './animes';

const reducer = combineReducers({
  anmiesReducer,

});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
