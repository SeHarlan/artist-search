import React from 'react';
import { shallow } from 'enzyme';
import Song from './Song';

describe('Song component', () => {
  it('renders Song', () => {
    const wrapper = shallow(<Song title="Please Me" artist="beatles"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
