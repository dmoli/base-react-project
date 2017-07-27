import React from 'react';

import List from './List';
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
];

test('Post list rendered correctly', () => {
  const component = createComponentWithIntl(<List posts={items} />);
  expect(component).toMatchSnapshot();
});
