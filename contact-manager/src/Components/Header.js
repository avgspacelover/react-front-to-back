
import React from 'react'
import propTypes  from 'prop-types';

export default function Header(props) {
  return (
    <h1 style= {{ color: "red", fontSize: '50px'}}>{props.brand}</h1>
  )
}


Header.defaultProps = {
    brand: "My App"
};

Header.propTypes = {
    brand: propTypes.string.isRequired
}