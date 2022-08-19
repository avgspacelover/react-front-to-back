import React from 'react';
import propTypes  from 'prop-types';
import './Contact.css'

const Contact = (props)=> {

    const {name, email, phone} = props;

    return(
        <div>
            <h4>{name}</h4>

            <ul>
                <li>
                    Email: {email}
                </li>
                <li>
                    Phone: {phone}
                </li>
            </ul>
        </div>
    )
}


Contact.propTypes = {
    name: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
    phone: propTypes.string.isRequired
    
}
export default Contact;