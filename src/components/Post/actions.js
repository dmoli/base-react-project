import api from '../../api';

export const actionTypes = {
  SET_POST: 'SET_POST',
};

const setPost = function setPost(posts) {
  return dispatch => dispatch({
    type: actionTypes.SET_POST,
    payload: posts,
  });
};

export const nextPage = function nextPage() {
  return async (dispatch, getState) => {
    const state = getState();
    const currentPage = state.posts.page;
    const posts = await api.posts.getList(currentPage);
    dispatch(
      setPost(posts),
    );
    return posts;
  };
};
