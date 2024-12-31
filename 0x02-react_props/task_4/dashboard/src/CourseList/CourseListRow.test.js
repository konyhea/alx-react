// CourseListRow.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  it('renders a single th with colspan when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader textFirstCell="Course Name" />);
    expect(wrapper.find('th').length).toBe(1);
    expect(wrapper.find('th').prop('colSpan')).toBe(2);
  });

  it('renders two th elements when isHeader is true and textSecondCell is present', () => {
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell="Course Name" textSecondCell="Grade" />
    );
    expect(wrapper.find('th').length).toBe(2);
  });

  it('renders two td elements when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Test Student" textSecondCell="B" />
    );
    expect(wrapper.find('td').length).toBe(2);
  });
});
