// CourseList.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList component', () => {
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders five rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('tr').length).toBe(5); 
  });
});
