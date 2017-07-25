import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducer';

export const initStore = initialState => createStore(
  reducer,
  initialState,
  applyMiddleware(thunkMiddleware),
);

export { initStore as default };
