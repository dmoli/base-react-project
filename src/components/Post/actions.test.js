/* eslint-env jest */
import { setPost, actionTypes } from './actions';

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
  it('should create an action to add posts', () => {
    const expectedAction = {
      type: actionTypes.SET_POST,
      payload: items,
    };
    expect(setPost(items)).toEqual(expectedAction);
  });
});
