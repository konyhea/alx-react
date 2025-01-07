import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  // Test when isHeader is true and textSecondCell is null
  it('renders a single th with colspan when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader textFirstCell="Course Name" />);
    expect(wrapper.find('th').length).toBe(1);
    expect(wrapper.find('th').prop('colSpan')).toBe(2);
  });

  // Test when isHeader is true and textSecondCell is provided
  it('renders two th elements when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell="Course Name" textSecondCell="Grade" />
    );
    expect(wrapper.find('th').length).toBe(2);
    expect(wrapper.find('th').at(0).text()).toBe('Course Name');
    expect(wrapper.find('th').at(1).text()).toBe('Grade');
  });

  // Test when isHeader is false, renders two td elements
  it('renders two td elements when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Test Student" textSecondCell="B" />
    );
    expect(wrapper.find('td').length).toBe(2);
    expect(wrapper.find('td').at(0).text()).toBe('Test Student');
    expect(wrapper.find('td').at(1).text()).toBe('B');
  });

  // Test when isHeader is true and textSecondCell is null, checks the text content
  it('renders correct text in th elements when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader textFirstCell="Course Name" />);
    expect(wrapper.find('th').at(0).text()).toBe('Course Name');
  });

  // Test when isHeader is true and both textFirstCell and textSecondCell are provided, check correct text content
  it('renders the correct text in th elements when isHeader is true', () => {
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell="Course Name" textSecondCell="Grade" />
    );
    expect(wrapper.find('th').at(0).text()).toBe('Course Name');
    expect(wrapper.find('th').at(1).text()).toBe('Grade');
  });

  // Test when isHeader is false, checks correct text in td elements
  it('renders correct text in td elements when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Test Student" textSecondCell="B" />
    );
    expect(wrapper.find('td').at(0).text()).toBe('Test Student');
    expect(wrapper.find('td').at(1).text()).toBe('B');
  });
});
