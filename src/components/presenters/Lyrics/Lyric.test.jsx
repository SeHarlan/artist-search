import React from 'react';
import { shallow } from 'enzyme';
import Lyric from './Lyric';

describe('Lyric component', () => {
  it('renders Lyric', () => {
    const wrapper = shallow(<Lyric title="test" body="lyrics" />);
    expect(wrapper).toMatchSnapshot();
  });
});
