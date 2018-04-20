import React from 'react';
import { shallow, mount } from 'enzyme';

import Select from './Select';

const optionsMock = [
  { id: '1', value: 'Run' },
  { id: '2', value: 'Swimming' },
];

describe('<Select/>', () => {
  it('Should component render with options', () => {
    const onChange = jest.fn();

    const wrapper = shallow(<Select id="types" name="types" options={optionsMock} value={optionsMock[0].value} onChange={onChange} />);

    expect(wrapper.find('option')).toHaveLength(optionsMock.length);
  });

});
