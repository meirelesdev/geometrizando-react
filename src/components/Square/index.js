import React from 'react';
import PropTypes from 'prop-types';


class Square extends React.Component {

  render() {
    return (
      <div>
        <span>{this.props.title}</span>
        <div
          style={{ background: this.props.color }}
          className="square"
        >
        </div>
      </div>
    )
  }
}

Square.propTypes = {
  color: PropTypes.string,
}
export default Square;