import React, { useContext } from 'react';
// import { useState } from 'react';
import Contact from './Contact';

import {Context} from '../../context';



export default function Contacts() {
    
    const [state,setState] = useContext(Context);

    const {contacts}= state

    const deleteContact =(id) => {

        const newContacts = contacts.filter(contact=> contact.id !== id)

        setState({contacts: newContacts})
    }

    console.log("check", contacts)
  return (

        <React.Fragment>
            {contacts.map(contact => ( 
                <Contact
                    key={contact.id}
                    contact= {contact}
                    deleteContactHandler= {()=> deleteContact(contact.id)}
                />)
            )}
        </React.Fragment>

    )
}


/*

  <Consumer>
            {state => {
                const contacts = state[0].contacts
                console.log(state)
                
                return (


                    <React.Fragment>
                        {contacts.map(contact => ( 
                            <Contact
                                key={contact.id}
                                contact= {contact}

                            
                            />)
                        )}
                    </React.Fragment>
                )
            }}
        </Consumer>
*/