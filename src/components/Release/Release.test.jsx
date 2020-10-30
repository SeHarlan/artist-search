import React from 'react';
import { shallow } from 'enzyme';
import Release from './Release';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    releaseTitle: 'test', 
    releaseId: 'test', 
    artist: 'test'
  }),
  useRouteMatch: () => ({ url: '/releases/test/test/test' }),
}));

describe('Release component', () => {
  it('renders Release', () => {
    const wrapper = shallow(<Release />);
    expect(wrapper).toMatchSnapshot();
  });
});
