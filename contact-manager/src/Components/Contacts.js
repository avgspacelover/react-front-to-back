import React from 'react';
import { useState } from 'react';
import Contact from './Contact';





export default function Contacts() {
    const [contacts,setContacts] = useState([
        {
            id: 1,
            name: 'John Doe',
            email: 'jdoe@gmail.com',
            phone: '555-555-5555'
        },
        {
            id: 2,
            name: 'Jane Doe',
            email: 'janedoe@gmail.com',
            phone: '222-222-2222'
        },{
            id: 4,
            name: 'Ace Parker',
            email: 'aparker@gmail.com',
            phone: '111-111-1111'
        }
    ]);


    const deleteContact = (id) => {
        const conts= contacts;
        const newContacts = conts.filter(contact=> contact.id !== id);

       setContacts(contacts=> newContacts)

    }

    console.log(contacts)
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
}
