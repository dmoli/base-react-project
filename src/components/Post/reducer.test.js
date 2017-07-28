/* eslint-env jest */
import reducer from './reducer';
import initialState from '../../redux/state';
import { setPost } from './actions';

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

describe('Post reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState.posts);
  });

  it('should handle SET_POST', () => {
    // call reducer to exect an action setPost
    expect(
      reducer(undefined, setPost(items)),
    ).toMatchSnapshot();
  });
});
