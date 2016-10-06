import React from 'react';
import { shallow } from 'enzyme';

// import component
import Interview from './Interview';

it('renders without crashing', () => {
  shallow(<Interview />);
});
