import React from "react";
import Square from '../Square'
import Circle from '../Circle'
import Triangle from '../Triangle'
import Rectangle from '../Rectangle'
import PropTypes from 'prop-types'


class Figure extends React.Component {

  render() {

    if (this.props.type === 'square') {
      return (
        <Square color={this.props.bg} />
      )
    }

    if (this.props.type === 'circle') {
      return (
        <Circle color={this.props.bg} />
      )
    }

    if (this.props.type === 'triangle') {
      return (
        <Triangle color={this.props.bg} />
      )
    }
    
    if (this.props.type === 'rectangle') {
      return (
        <Rectangle color={this.props.bg} />
      )
    }

    return (
      <div />
    )

  }
}

Figure.propTypes = {
  bg: PropTypes.string,
  type: PropTypes.oneOf(["square", "circle", "triangle", "rectangle"]),
}

export default Figure;