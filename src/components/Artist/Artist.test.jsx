import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    artistId: 'test',
    artist: 'test',
  }),
  useRouteMatch: () => ({ url: '/artists/test/test' }),
}));

describe('Artist component', () => {
  it('renders Artist', () => {
    const wrapper = shallow(<Artist />);
    expect(wrapper).toMatchSnapshot();
  });
});
