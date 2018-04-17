import React from 'react';
import { shallow, mount } from 'enzyme';

import Field from './Field';

const InputMock = ({ value, onChange }) => <input type="text" value={value} onChange={onChange} />;

describe('<Field />', () => {
  it('Should component render prop component', () => {
    const wrapper = mount(<Field component={InputMock} />);

    expect(wrapper.find(InputMock)).toHaveLength(1);
  });

  it('Should component set value', () => {
    const value = "ssss";

    const wrapper = shallow(<Field component={InputMock} value={value} />);

    expect(wrapper.find(InputMock).prop('value')).toBe(value);
  });
});
