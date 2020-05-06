import React from 'react';
import { shallow } from 'enzyme';
import Lyric from './Lyric';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    title: 'test',
    artist: 'test'
  }),
  useRouteMatch: () => ({ url: '/lyrics/test/test' }),
}));
describe('Lyric component', () => {
  it('renders Lyric', () => {
    const wrapper = shallow(<Lyric />);
    expect(wrapper).toMatchSnapshot();
  });
});
