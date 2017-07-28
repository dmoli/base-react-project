import React from 'react';
import { shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';

import Layout from './Layout';
import Menu from './Menu';
import createComponentWithIntl from '../../scripts/helperWithIntl';

describe('<Layout />', () => {
  it('rendered correctly', () => {
    const component = createComponentWithIntl(<Layout />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
