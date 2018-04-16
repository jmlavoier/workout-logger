import React from 'react';
import { shallow, mount } from 'enzyme';

import ItemList from './Item';

const mockItem ={ 
  timeSpent: '1:00',
  workoutType: 'Run',
  date: '15/04/2018',
};

describe('<ItemList/>', () => {
  it('Should component render item', () => {
    const { timeSpent, workoutType, date } = mockItem;

    const wrapper = mount(<Item item={mockItem} />);

    expect(wrapper.find('.time-spent').text()).toBe(timeSpent);
    expect(wrapper.find('.workout-type').text()).toBe(workoutType);
    expect(wrapper.find('.date').text()).toBe(date);
  });
});

