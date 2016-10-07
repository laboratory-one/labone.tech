import React from 'react';
import { shallow } from 'enzyme';

// import component
import Background from './Background';

it('renders without crashing', () => {
  shallow(<Background />);
});
