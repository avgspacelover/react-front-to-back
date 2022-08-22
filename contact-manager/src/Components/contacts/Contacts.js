import React, { useContext, useEffect } from 'react';
// import { useState } from 'react';
import Contact from './Contact';

import {Context} from '../../context';
import axios from 'axios';



export default function Contacts() {
    
    const [state,setState] = useContext(Context);

    const {contacts}= state



    const deleteContact =async (id) => {

        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {

                const newContacts = contacts.filter(contact=> contact.id !== id)
                setState({contacts: newContacts})
                

            })


    }

   
   
   

    console.log("check", contacts)
  return (

        <React.Fragment>
            <h1 className='display-4 mb-2'>
                <span className='text-danger'>Contact </span>
                List
            </h1>
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