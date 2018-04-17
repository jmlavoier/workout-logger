import React from 'react';
import { shallow, mount } from 'enzyme';

import Container from './Container';

describe('<Container></Container>', () => {
  it('Should component render children', () => {
    const text = 'content';
  
    const wrapper = mount(<Container>{text}</Container>);
  
    expect(wrapper.text()).toEqual(text);
  });
});

