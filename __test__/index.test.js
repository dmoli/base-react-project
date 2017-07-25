/* global describe:true */
/* global it:true */
/* global expect:true */

// import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../pages/index';

/*
describe('With Enzyme', () => {
  it('App shows "Title! Index"', () => {
    const app = shallow(<App />);

    expect(app.find('p').text()).toEqual('Title! Index');
  });
});
*/

describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
