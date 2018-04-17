import React from 'react';
import { shallow, mount } from 'enzyme';

import Button from './Button';

describe('<Button></Button>', () => {
  it('Should component render children', () => {
    const value = 'add';
    const wrapper = mount(<Button>{value}</Button>);

    expect(wrapper.text()).toEqual(value);
  });

  it('Should component call click event', () => {
    const value = 'add';
    const onClick = jest.fn();
    const wrapper = mount(<Button onClick={onClick}>{value}</Button>);

    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});

