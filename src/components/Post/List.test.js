/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';

import List from './List';
import Item from './Item';
import createComponentWithIntl from '../../scripts/helperWithIntl';

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

describe('Post <List />', () => {
  it('rendered correctly', () => {
    const component = createComponentWithIntl(<List posts={items} />);
    expect(component).toMatchSnapshot();
  });

  it('should render 3 <Item /> components', () => {
    const component = shallow(<List posts={[]}/>);
    component.setProps({ posts: items });
    expect(component.find(Item).length).toBe(3);
  });
});
