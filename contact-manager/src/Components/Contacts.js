import React from 'react';
import { useState } from 'react';
import Contact from './Contact';

import { Consumer } from '../context';



export default function Contacts() {
    const [contacts,setContacts] = useState();


    const deleteContact = (id) => {
        const conts= contacts;
        const newContacts = conts.filter(contact=> contact.id !== id);

       setContacts(contacts=> newContacts)

    }


  return (
    <Consumer>
        {value => {
            const {contacts} = value

            return (


                <React.Fragment>
                    {contacts.map(contact => ( 
                        <Contact
                            key={contact.id}
                            contact= {contact}
                            deleteClickHandler= {()=> deleteContact(contact.id)}
                        
                        />)
                    )}
                </React.Fragment>
            )
        }}
    </Consumer>


  )
}
