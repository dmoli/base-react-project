import React from 'react';

import Item from './Item';
import createComponentWithIntl from '../../scripts/helperWithIntl';

const item = {
  id: 3,
  title: 'title test',
};

test('Post item rendered correctly', () => {
  const component = createComponentWithIntl(<Item {...item} />);
  expect(component).toMatchSnapshot();
});
