import React from 'react';
import renderer from 'react-test-renderer';

import Menu from './Menu';
import createComponentWithIntl from '../../scripts/helperWithIntl';

test('Menu rendered correctly', () => {
  const component = createComponentWithIntl(<Menu />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
