import { handleActions } from 'redux-actions';
import * as TYPES from './types';

const initialState = {
  fromRate: {
    value: '',
    currency: 'RUB'
  },
  toRate: {
    value: '',
    currency: 'RUB'
  }
};

export default handleActions(
  {
    [TYPES.SET_CURRENCY]: (state, action) => {
      const { value, direction } = action.payload;
      return {
        ...state,
        [direction]: { ...state[direction], currency: value }
      };
    },
    [TYPES.SET_VALUE]: (state, action) => {
      const { value, direction } = action.payload;
      return {
        ...state,
        [direction]: { ...state[direction], value }
      };
    },
    [TYPES.CLEAR_VALUE]: (state, action) => ({
      ...state,
      fromRate: { ...state.fromRate, value: '' },
      toRate: { ...state.toRate, value: '' }
    })
  },
  initialState
);
