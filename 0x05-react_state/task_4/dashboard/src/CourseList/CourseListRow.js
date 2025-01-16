import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    setIsChecked((prev) => !prev);
  };

  // Conditionally choose the style based on the isHeader flag and checkbox state
  const rowStyle = isHeader
    ? styles.theadRow
    : isChecked
    ? styles.rowChecked
    : styles.regularRow;

  // Render the row
  return (
    <tr className={css(rowStyle)}>
      {isHeader ? (
        textSecondCell === null ? (
          // Header row with one column spanning two cells
          <th className={css(styles.th)} colSpan={2}>
            {textFirstCell}
          </th>
        ) : (
          // Header row with two columns
          <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        // Regular row with two cells
        <>
          <td className={css(styles.td)}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChecked}
            />
            {textFirstCell}
          </td>
          <td className={css(styles.td)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

// Define Aphrodite styles
const styles = StyleSheet.create({
  theadRow: {
    borderBottom: '2px solid ghostwhite',
    backgroundColor: '#deb5b545',
  },
  regularRow: {
    backgroundColor: '#f5f5f5ab',
  },
  th: {
    padding: '5px',
    margin: '1px',
  },
  td: {
    padding: '5px',
    margin: '1px',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

// Define PropTypes for CourseListRow
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

// Set defaultProps for CourseListRow
CourseListRow.defaultProps = {
  isHeader: false,
};

export default CourseListRow;
