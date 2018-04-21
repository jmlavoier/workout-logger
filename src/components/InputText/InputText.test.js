import React from 'react';
import { shallow, mount } from 'enzyme';

import InputText from './InputText';

describe('<InputText/>', () => {
  it('Should component set value', () => {
    const value = '0:00';
    const onChange = jest.fn();

    const wrapper = shallow(<InputText value={value} onChange={onChange} />);

    expect(wrapper.prop('value')).toEqual(value);
  });
});

