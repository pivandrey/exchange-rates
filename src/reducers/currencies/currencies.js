import { handleActions } from 'redux-actions';
import * as TYPES from './types';

const initialState = {
  currencies: {},
  favorites: []
};

export default handleActions(
  {
    [TYPES.ADD_CURRENCIES]: (state, action) => ({
      ...state,
      currencies: action.payload
    }),
    [TYPES.ADD_FAVORITE_CURRENCIES]: (state, action) => ({
      ...state,
      favorites: action.payload
    })
  },
  initialState
);
