import React from 'react'
import {PropTypes} from 'prop-types';


export const Header = ({text, bgColor, textColor}) => {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
      }


  return (
    <div className={headerStyles}>
        <h2>{text}</h2>
    </div>
  )
}


Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95",
  }
  

  Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
  }