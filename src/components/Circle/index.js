import React from 'react';
import PropTypes from 'prop-types';

export default class Circle extends React.Component {

  render() {
    return (
      <div className="circle" style={{background: this.props.color}}></div>
    )
  }
}
Circle.propTypes = {
  color: PropTypes.string,
}
