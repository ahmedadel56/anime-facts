import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import anmiesReducer from './animes';

const reducer = combineReducers({
  // anmiesReducer,

});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
