import React from 'react';
import { shallow, mount } from 'enzyme';

import Field from './Field';

describe('<Field />', () => {
  it('Should component render prop component', () => {
    const component = <input value="" />;

    const wrapper = shallow(<Field component={component} />);

    expect(wrapper.find(component)).toHaveLength(1);
  });

  it('Should component set value', () => {
    const Component = <input value="" />;
    const value = "value";

    const wrapper = shallow(<Field component={Component} value={value} />);

    expect(wrapper.find(Component).value).toBe(value);
  });
});
