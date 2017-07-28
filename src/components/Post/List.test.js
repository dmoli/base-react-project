import React from 'react';
import { shallow, mount } from 'enzyme';

import List from './List';
import Item from './Item';
import { createComponentWithIntl } from '../../scripts/helperWithIntl';

const items = [
  {
    id: 1,
    title: 'title test 1',
  },
  {
    id: 2,
    title: 'title test 2',
  },
];

describe('Post <List />', () => {
  it('rendered correctly', () => {
    const component = createComponentWithIntl(<List posts={items} />);
    expect(component).toMatchSnapshot();
  });
});
