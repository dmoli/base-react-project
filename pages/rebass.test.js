/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';

import Rebass from './rebass';

describe('Page - Rebass', () => {
  it('rendered correctly', () => {
    const component = renderer.create(<Rebass locale='en' />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
