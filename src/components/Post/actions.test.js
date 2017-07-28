/* eslint-env jest */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import { setPost, nextPage, actionTypes } from './actions';
import initialState from '../../redux/state';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const items = [
  {
    id: 1,
    title: 'title test 1',
  },
  {
    id: 2,
    title: 'title test 2',
  },
  {
    id: 3,
    title: 'title test 3',
  },
];

describe('Post actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('nextPage - fetch should response successful', () => {
    nock('https://jsonplaceholder.typicode.com')
      .get('/posts?_page=1')
      .reply(200, { posts: items });

    const expectedActions = [
      { type: actionTypes.SET_POST, payload: { posts: items } },
    ];

    const store = mockStore(initialState);

    return store.dispatch(nextPage()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('nextPage - fetch should response with error', () => {
    nock('https://jsonplaceholder.typicode.com')
      .get('/posts?_page=1')
      .reply(404);

    const expectedActions = [
      { type: actionTypes.SHOW_ERROR },
    ];

    const store = mockStore(initialState);

    return store.dispatch(nextPage()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('setPost - should create an action to add posts', () => {
    const expectedAction = {
      type: actionTypes.SET_POST,
      payload: items,
    };
    expect(setPost(items)).toEqual(expectedAction);
  });
});
