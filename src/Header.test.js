import React from 'react';
import { shallow } from 'enzyme';

// import component
import Header from './Header';

it('renders without crashing', () => {
  shallow(<Header />);
});
