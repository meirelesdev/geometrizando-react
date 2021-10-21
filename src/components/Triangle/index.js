import React from "react";
import PropTypes from 'prop-types';

class Triangle extends React.Component {

  render() {
    return (
      <div
        className="triangle"
        style={{ borderBottomColor: this.props.color }}>

      </div>
    )
  }
}

Triangle.propTypes = {
  color: PropTypes.string,
}
export default Triangle;