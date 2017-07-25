import { combineReducers } from 'redux';

import { actionTypes } from './actions';
import initialState from '../../redux/state';

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
  page: pageReducer,
  entities: entitiesReducer,
});

export default postReducer;
