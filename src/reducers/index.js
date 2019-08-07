import { combineReducers } from 'redux';
import currencies from './currencies';
import history from './history';

export const rootReducer = combineReducers({
  currencies,
  history
});
