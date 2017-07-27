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

  it('rendered correctly after BurgerButton click');
});

/*
test('Menu BurgerButton changes state after click', () => {
  const menu = shallow(<Menu />);
  expect(menu.text()).toEqual('Off');
  menu.find('.icon-menu').simulate('change');
  expect(menu.text()).toEqual('On');
  /*
  expect(menu.text()).toEqual('Off');

  menu.find('.icon-menu').simulate('click ');

  expect(menu.text()).toEqual('On');
});
*/
