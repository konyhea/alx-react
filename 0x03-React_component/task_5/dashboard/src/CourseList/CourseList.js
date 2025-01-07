import React from "react";
import CourseListRow from './CourseListRow';
import './CourseList.css';
import CourseShape from './CourseShape'
import PropTypes from "prop-types";

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow
          className="table-title"
          textFirstCell="Available courses"
          isHeader={true}
        />
        <CourseListRow
          textFirstCell="Course name"
          textSecondCell="Credit"
          isHeader={true}
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow
            textFirstCell="No course available yet"
            isHeader={false}
          />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={String(course.credit)}
              isHeader={false}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

// Define propTypes for CourseList
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

// Default props for CourseList
CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
