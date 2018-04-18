import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';

describe('<App/>', () => {
  it('Should component match snapshot', () => {
    const wrapper = mount(<App/>);
  
    expect(wrapper).toMatchSnapshot();
  });
});
