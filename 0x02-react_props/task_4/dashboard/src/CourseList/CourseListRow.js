import React from "react";
import PropTypes from "prop-types";

export const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    return (
        <>
            <tr>
                {isHeader ? (
                    textSecondCell === null ? (
                        <th className="available-course" colSpan={2}>{textFirstCell}</th>
                    ) : (
                        <>
                            <th className="textFirstCell">{textFirstCell}</th>
                            <th className="textSecondCell">{textSecondCell}</th>
                        </>
                    )
                ) : (
                    <>
                        <td>{textFirstCell}</td>
                        <td>{textSecondCell}</td>
                    </>
                )}
            </tr>
        </>
    );
};

// PropTypes for props validation
CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

// Default props
CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

export default CourseListRow;

