/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';

import Post from './post';

describe('Page - Post', () => {
  it('rendered correctly', () => {
    const component = renderer.create(<Post locale='en' />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
