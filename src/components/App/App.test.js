import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from 'store';
import { shallow, mount } from 'enzyme';

import App from './App';

describe('<App/>', () => {
  xit('Should component match snapshot', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App/>
      </Provider>
    );
  
    expect(wrapper).toMatchSnapshot();
  });
});
