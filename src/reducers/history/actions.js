import { createAction } from 'redux-actions';

import * as TYPES from './types';

export const addExchangeToHistory = createAction(TYPES.ADD_EXCHANGE_TO_HISTORY);

export const createHistoryExchange = data => dispatch => {
  dispatch(addExchangeToHistory(data));
};
