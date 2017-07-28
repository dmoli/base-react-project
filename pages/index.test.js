/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';

import Index from './index';

describe('Page - Index', () => {
  it('rendered correctly', () => {
    const component = renderer.create(<Index locale='en' />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
