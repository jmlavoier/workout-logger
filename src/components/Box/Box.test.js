import React from 'react';
import { shallow, mount } from 'enzyme';

import Box from './Box';

describe('<Box></Box>', () => {
  it('Should component render children', () => {
    const text = 'content';
  
    const wrapper = mount(<Box>{text}</Box>);
  
    expect(wrapper.text()).toEqual(text);
  });
});
