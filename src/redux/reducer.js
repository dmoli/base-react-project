import { combineReducers } from 'redux';

import postReducer from '../components/Post/reducer';

const reducer = combineReducers({
  posts: postReducer,
});

export default reducer;
