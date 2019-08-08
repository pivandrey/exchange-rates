import { createAction } from 'redux-actions';

import * as TYPES from './types';

export const setCurrency = createAction(TYPES.SET_CURRENCY);
export const setValue = createAction(TYPES.SET_VALUE);
export const clearValue = createAction(TYPES.CLEAR_VALUE);

export const changeCurrency = (value, direction) => (dispatch, getState) => {
  dispatch(setCurrency({ value, direction }));

  const state = getState();
  const currencies = state.currencies.currencies;
  const {
    fromRate: { currency: currencyFrom, value: valueFrom },
    toRate: { currency: currencyTo, value: valueTo }
  } = state.converter;

  const fromRate = currencies[currencyFrom].Value;
  const toRate = currencies[currencyTo].Value;

  if (direction === 'toRate') {
    if (!valueTo) {
      return;
    }
    const result = (valueTo * toRate) / fromRate;
    dispatch(setValue({ value: valueTo, direction: 'toRate' }));
    dispatch(setValue({ value: result.toFixed(2), direction: 'fromRate' }));
  } else {
    if (!valueFrom) {
      return;
    }
    const result = (valueFrom * fromRate) / toRate;
    dispatch(setValue({ value: valueFrom, direction: 'fromRate' }));
    dispatch(setValue({ value: result.toFixed(2), direction: 'toRate' }));
  }
};

export const changeValue = (value, reverse) => (dispatch, getState) => {
  const state = getState();
  const currencies = state.currencies.currencies;
  const {
    fromRate: { currency: currencyFrom },
    toRate: { currency: currencyTo }
  } = state.converter;

  const fromRate = currencies[currencyFrom].Value;
  const toRate = currencies[currencyTo].Value;

  /** если ввод значения был во втором поле, то результат записываем в первое поле */
  if (reverse) {
    const result = (value * toRate) / fromRate;
    dispatch(setValue({ value, direction: 'toRate' }));
    dispatch(setValue({ value: result.toFixed(2), direction: 'fromRate' }));
  } else {
    const result = (value * fromRate) / toRate;
    dispatch(setValue({ value, direction: 'fromRate' }));
    dispatch(setValue({ value: result.toFixed(2), direction: 'toRate' }));
  }
};
