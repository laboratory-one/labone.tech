import React from 'react';
import { shallow } from 'enzyme';

// import component
import Image from './Image';

it('renders without crashing', () => {
  shallow(<Image />);
});
