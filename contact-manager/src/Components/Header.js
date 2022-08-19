
import React from 'react'
import propTypes  from 'prop-types';

export default function Header(props) {
  return (
    <div>{props.brand}</div>
  )
}


Header.defaultProps = {
    brand: "My App"
};

Header.propTypes = {
    brand: propTypes.string.isRequired
}