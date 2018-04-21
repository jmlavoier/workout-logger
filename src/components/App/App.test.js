import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import { shallow, mount } from 'enzyme';

import App from './App';

describe('<App/>', () => {
  it('Should component match snapshot', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App/>
      </Provider>
    );
  
    expect(wrapper).toMatchSnapshot();
  });
});
