import React from 'react';
import { shallow, mount } from 'enzyme';

import List from './List';

const mockList = [
  { 
    timeSpent: '1:00',
    workoutType: 'Run',
    date: '15/04/2018',
  },
  { 
    timeSpent: '0:30',
    workoutType: 'Run',
    date: '15/04/2018',
  },
];

describe('<List/>', () => {
  it('Should component list items', () => {
    const wrapper = mount(<List items={mockList} />);

    expect(wrapper.find('.item')).toHaveLength(mockList.length);
  });
});

