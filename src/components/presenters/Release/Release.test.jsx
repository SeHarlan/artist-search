import React from 'react';
import { shallow } from 'enzyme';
import Release from './Release';

describe('Release component', () => {
  it('renders Release', () => {
    const wrapper = shallow(<Release match={{ params: { releaseTitle: 'test' } }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
