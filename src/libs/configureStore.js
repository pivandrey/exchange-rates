import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const persistedState = sessionStorage.getItem('reduxState')
  ? JSON.parse(sessionStorage.getItem('reduxState'))
  : {};

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  sessionStorage.setItem(
    'reduxState',
    JSON.stringify({
      currencies: store.getState().currencies,
      history: store.getState().history,
      converter: store.getState().converter
    })
  );
});
