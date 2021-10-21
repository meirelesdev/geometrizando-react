import React from "react";
import PropTypes from 'prop-types'


class Rectangle extends React.Component {

  render() {
    return (
      <div
        className="rectangle"
        style={{ borderBottomColor: this.props.color }}>

      </div>
    )
  }
}

Rectangle.propTypes = {
  bg: PropTypes.string,
  type: PropTypes.oneOf(["square", "circle", "triangle", "rectangle"]),
}
export default Rectangle;