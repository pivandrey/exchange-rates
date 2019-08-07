import { combineReducers } from 'redux';
import currencies from './currencies';
import history from './history';
import converter from './converter';

export const rootReducer = combineReducers({
  currencies,
  history,
  converter
});
