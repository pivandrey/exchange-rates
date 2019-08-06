import { createAction } from 'redux-actions';

import * as TYPES from './types';
import { CURRENCIES_URL } from '../../constants';

export const addCurrencies = createAction(TYPES.ADD_CURRENCIES);

export const fetchCurrencies = () => async dispatch => {
  const data = fetch(CURRENCIES_URL);
  dispatch(addCurrencies(data));
};
