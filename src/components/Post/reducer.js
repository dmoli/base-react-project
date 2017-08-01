import { combineReducers } from 'redux';

import { actionTypes } from './actions';
import initialState from '../../redux/state';

function errorReducer(state = initialState.posts.error, action = {}) {
  switch (action.type) {
    case actionTypes.SHOW_ERROR:
      return state;
    default:
      return state;
  }
}

function pageReducer(state = initialState.posts.page, action = {}) {
  switch (action.type) {
    case actionTypes.SET_POST:
      return state + 1;
    default:
      return state;
  }
}

function entitiesReducer(state = initialState.posts.entities, action = {}) {
  switch (action.type) {
    case actionTypes.SET_POST:
      return state.concat(action.payload);
    default:
      return state;
  }
}

const postReducer = combineReducers({
  error: errorReducer,
  page: pageReducer,
  entities: entitiesReducer,
});

export default postReducer;
