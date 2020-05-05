import React from 'react';
import { shallow } from 'enzyme';
import Lyric from './Lyric';

describe('Lyric component', () => {
  it('renders Lyric', () => {
    const wrapper = shallow(<Lyric match={{ params: { artist: 'Beatles', title: 'Please Please Me' } }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
