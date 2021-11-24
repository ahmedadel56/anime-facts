import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import anmiesReducer from './animes';
import anmiesDetailsReducer from './animesDetails';

const reducer = combineReducers({
  anmiesReducer,
  anmiesDetailsReducer,

});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
