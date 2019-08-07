import { createAction } from 'redux-actions';
import axios from 'axios';

import * as TYPES from './types';
import { CURRENCIES_URL, FAVORITE_CURRENCIES } from '../../constants';

export const addCurrencies = createAction(TYPES.ADD_CURRENCIES);
export const addFavoriteCurrencies = createAction(
  TYPES.ADD_FAVORITE_CURRENCIES
);

export const fetchCurrencies = () => async dispatch => {
  const { data } = await axios.get(CURRENCIES_URL);
  const { Valute } = data;

  const favorites = FAVORITE_CURRENCIES.map(currency => Valute[currency]);

  dispatch(addCurrencies(Valute));
  dispatch(addFavoriteCurrencies(favorites));
};
