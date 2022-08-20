
import React from 'react'
import propTypes  from 'prop-types';

export default function Header(props) {
  return (

    <nav className="navbar navbar-expand-sm avbar-dark bg-danger mb-3 py-0">

        <div className="container">
          <a href="/" className="navbar-brand">{props.brand} </a>

          <ul className="navbar-nav mr-auto">
            
            <li className="nav-item">

              <a href="/" className='nav-link' > Home </a>

            </li>
               
          </ul>
        </div>
    </nav>
  )
}


Header.defaultProps = {
    brand: "My App"
};

Header.propTypes = {
    brand: propTypes.string.isRequired
}