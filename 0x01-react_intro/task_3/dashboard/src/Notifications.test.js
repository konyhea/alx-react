import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component testing', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('Here is the list of notifications');
  });

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    const listItems = wrapper.find('li');
    expect(listItems).toHaveLength(3);
  });
});
