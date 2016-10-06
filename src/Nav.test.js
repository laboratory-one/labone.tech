import React from 'react';
import { shallow } from 'enzyme';

// import component
import Nav from './Nav';

it('renders without crashing', () => {
  shallow(<Nav />);
});
