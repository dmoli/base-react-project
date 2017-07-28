/* eslint-env jest */
import React from 'react';

import Layout from './Layout';
import createComponentWithIntl from '../../scripts/helperWithIntl';

describe('<Layout />', () => {
  it('rendered correctly', () => {
    const component = createComponentWithIntl(<Layout />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
