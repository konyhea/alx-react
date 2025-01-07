import React from 'react';
import PropTypes from 'prop-types';
import BodySection from '../BodySection/BodySection'; // Assuming BodySection is at this path
import './BodySectionWithMarginBottom.css'; // Import the CSS for margin styling

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className="bodySectionWithMargin">
        {/* Pass all props to BodySection using the spread operator */}
        <BodySection {...this.props} />
      </div>
    );
  }
}

// Define prop types for BodySectionWithMarginBottom
BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default BodySectionWithMarginBottom;
