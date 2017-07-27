import React from 'react';

import Layout from './Layout';
import createComponentWithIntl from '../../scripts/helperWithIntl';

test('Layout rendered correctly', () => {
  const component = createComponentWithIntl(<Layout />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
