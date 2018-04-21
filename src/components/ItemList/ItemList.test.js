import React from 'react';
import { shallow, mount } from 'enzyme';

import ItemList from './ItemList';

const mockItem = { 
  timeSpent: '1:00',
  workoutType: 'Run',
  date: '15/04/2018',
};

describe('<ItemList/>', () => {
  it('Should component render item', () => {
    const { timeSpent, workoutType, date } = mockItem;
    
    const wrapper = mount(
      <table>
        <tbody>
          <ItemList item={mockItem} onClickRemove={() => {}} />
        </tbody>
      </table>
    );
    
    expect(wrapper).toMatchSnapshot();
  });
});

