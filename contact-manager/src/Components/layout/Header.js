
import React from 'react'
import propTypes  from 'prop-types';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (

    <nav className="navbar navbar-expand-sm avbar-dark bg-danger mb-3 py-0">

        <div className="container">
          
          <Link to="/" className="navbar-brand" style={{cursor: 'pointer', color: 'white'}}>{props.brand} </Link>

          <ul className="navbar-nav mr-auto">
            
            <li className="nav-item">

              <Link to="/" className='nav-link' style={{cursor: 'pointer'}} >
                
              <i className="fa fa-home" aria-hidden="true"></i> Home

              
              </Link>

            </li>

            <li className="nav-item">

              <Link to="/contact/add" className='nav-link' style={{cursor: 'pointer'}} >
                
                <i className="fa fa-plus" aria-hidden="true"></i> Add 
              
              </Link>

            </li>

            <li className="nav-item">

              <Link to="/about" className='nav-link' style={{cursor: 'pointer'}} >
                
                <i className="fa fa-home" aria-hidden="true"></i> About

              
              </Link>

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