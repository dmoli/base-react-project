import React from 'react';

import Item from './Item';
import createComponentWithIntl from '../../scripts/helperWithIntl';

const item = {
  id: 2,
  title: 'title test',
};

test('Comment should render the component', () => {
  const component = createComponentWithIntl(<Item {...item} />);
  expect(component).toMatchSnapshot();
});
