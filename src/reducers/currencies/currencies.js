import { handleActions } from 'redux-actions';
import * as TYPES from './types';

const initialState = {
  currencies: []
};

export default handleActions(
  {
    [TYPES.ADD_CURRENCIES]: (state, action) => ({
      currencies: action.payload
    })
  },
  initialState
);
