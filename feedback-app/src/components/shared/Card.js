import React from 'react'
import PropTypes from 'prop-types';

const Card = ({children, reverse}) => {
  return (
    <div classname={`card ${reverse && 'reverse'}`}>
        {children}
    </div>
  )
}

Card.defaultProps = {
    reverse: true
}

Card.propTypes = {
    children: PropTypes.node.isRequired ,
    reverse: PropTypes.bool
}
export default Card