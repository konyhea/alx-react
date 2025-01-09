import React from "react";
import PropTypes from "prop-types";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  // Define styles for rows
  const headerRowStyle = { backgroundColor: "#deb5b545" };
  const regularRowStyle = { backgroundColor: "#f5f5f5ab" };
  return (
    <tr style={isHeader ? headerRowStyle : regularRowStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          // Header row with one column spanning two cells
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          // Header row with two columns
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        // Regular row with two cells
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

// Define PropTypes for CourseListRow
CourseListRow.propTypes = {
  isHeader: PropTypes.bool, // Determines if the row is a header
  textFirstCell: PropTypes.string.isRequired, // First cell content (required string)
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string, // Second cell content can be a string
    PropTypes.number, // or a number
  ]),
};

// Set defaultProps for CourseListRow
CourseListRow.defaultProps = {
  isHeader: false, // Default to a non-header row
};

export default CourseListRow;
