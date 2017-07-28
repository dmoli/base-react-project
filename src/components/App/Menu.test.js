/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import Menu from './Menu';
import createComponentWithIntl from '../../scripts/helperWithIntl';

describe('<Menu />', () => {
  it('rendered correctly', () => {
    const component = createComponentWithIntl(<Menu />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render one .icon-menu components', () => {
    const component = shallow(<Menu />);
    expect(component.find('.icon-menu').length).toBe(1);
  });

  it('should change state after BurgerButton click', () => {
    const component = shallow(<Menu />);
    // default
    expect(component.state().open).toEqual(false);
    // click to open
    component.find('.icon-menu').simulate('click');
    expect(component.state().open).toEqual(true);
    // click to close
    component.find('.icon-menu').simulate('click');
    expect(component.state().open).toEqual(false);
  });
});
