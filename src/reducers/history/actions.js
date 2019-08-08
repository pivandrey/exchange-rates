import { createAction } from 'redux-actions';

import * as TYPES from './types';

export const addExchangeToHistory = createAction(TYPES.ADD_EXCHANGE_TO_HISTORY);

export const createHistoryExchange = reverse => (dispatch, getState) => {
  const state = getState();
  const currentExchange = state.converter;

  /** если ввод значения был во втором поле, то реверсим объект истории */
  if (reverse) {
    const { fromRate, toRate } = currentExchange;
    const reverseExchange = {
      id: Date.now(),
      fromRate: toRate,
      toRate: fromRate
    };

    dispatch(addExchangeToHistory(reverseExchange));

    return;
  }
  dispatch(addExchangeToHistory({ ...currentExchange, id: Date.now() }));
};
