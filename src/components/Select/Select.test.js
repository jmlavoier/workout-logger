import React from 'react';
import { shallow, mount } from 'enzyme';

import Select from './Select';

describe('<Select/>', () => {
  it('Should component render with options', () => {
    const options = ['Run', 'Swimming'];
    const onChange = jest.fn();

    const wrapper = shallow(<Select id="types" name="types" options={options} value={options[0]} onChange={onChange} />);

    expect(wrapper.find('option')).toHaveLength(options.length);
  });

});
