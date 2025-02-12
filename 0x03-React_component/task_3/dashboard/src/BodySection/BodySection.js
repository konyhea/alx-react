import React from "react";

class BodySection extends React.Component {
  render() {
    return (
      <div className="bodySection">
        <h2>{this.props.title}</h2>
        {this.props.children} {/* Render the children here */}
      </div>
    );
  }
}

export default BodySection;
