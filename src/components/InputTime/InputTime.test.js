import React from 'react';
import { shallow, mount } from 'enzyme';

import InputTime from './InputTime';

describe('<InputTime/>', () => {
  it('Should component set value', () => {
    const value = '0:00';
    const wrapper = mount(<InputTime value={value} />);

    expect(wrapper.find('input').value).toEqual(value);
  });
});

