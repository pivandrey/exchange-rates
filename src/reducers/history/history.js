import { handleActions } from 'redux-actions';

import * as TYPES from './types';
import { MAX_ITEMS_HISTORY } from '../../constants';

const initialState = {
  history: []
};

export default handleActions(
  {
    [TYPES.ADD_EXCHANGE_TO_HISTORY]: (state, action) => {
      const currentHistory = state.history;
      if (currentHistory.length === MAX_ITEMS_HISTORY) {
        currentHistory.shift();
      }
      return {
        history: currentHistory.concat(action.payload)
      };
    }
  },
  initialState
);
