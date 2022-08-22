import React, { useState } from 'react';
import propTypes  from 'prop-types';
import './Contact.css'
import { Link } from 'react-router-dom';

const Contact = (props)=> {

    const {name, email, phone,id} = props.contact;

    const [showInfo, setShowInfo]= useState(false)

 

    const arrowDir = showInfo ? 'fa fa-sort-up': 'fa fa-sort-down'

    const onDeleteClick = ()=> {
        
        props.deleteContactHandler()
    }

    return(
        <div className='card card-body mb-3'>
            <h4>{name} 
                <i 
                    className={arrowDir} 
                    aria-hidden="true" 
                    style={{cursor: 'pointer'}} 
                    onClick={()=> setShowInfo(showInfo=> !showInfo)} >
                
                </i>
                <i 
                    className='fa fa-times'
                    style={{cursor: 'pointer', float: 'right', color: 'red'}}
                    onClick= {onDeleteClick} >
                </i>

                <Link to={`contact/edit/${id}`}>
                    <i className="fa fa-pencil" style={{
                        cursor: 'pointer',
                        float: 'right',
                        color: 'black',
                        marginRight: '1rem'
                    }}></i>
                </Link>
            </h4>

            {showInfo ? ( 
                <ul className='list-group'>
                
                    <li className='list-group-item'>
                        Email: {email}
                    </li>
                    <li className='list-group-item'>
                        Phone: {phone}
                    </li>
                </ul> 
            ): null }
        </div>
    )
}


Contact.propTypes = {
    contact: propTypes.object.isRequired
}
export default Contact;