import React from 'react';
import { shallow, mount } from 'enzyme';

import InputTime from './InputTime';

describe('<InputTime/>', () => {
  it('Should component set value', () => {
    const value = '0:00';
    const wrapper = shallow(<InputTime value={value} />);

    expect(wrapper.prop('value')).toEqual(value);
  });
});

