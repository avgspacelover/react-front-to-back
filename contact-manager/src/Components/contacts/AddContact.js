import React, { useState, useContext } from 'react'

import {Context} from '../../context';


export default function AddContact() {

    const [data, setData] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const [state,setState] = useContext(Context);


    const onSubmit = (e) => {
        e.preventDefault() ;
        console.log(data, state)

        const {contacts}= state
        data['id']= contacts.length+1
        contacts.push(data)
        const newContacts = contacts

        setState({contacts: newContacts})
        setData({
            name: '',
            email: '',
            phone: ''
        })
    }
  
    const {name,email, phone}= data
    return (
        
        <div className='card mb-3'>
            <div className='card-header'>Add Contact</div>

            <div className='card-body'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label htmlFor= "name">Name</label>

                        <input 
                            type="text"
                            name="name"
                            className='form-control form-control-lg'
                            placeholder='Enter Name: '
                            value = {name}
                            onChange= {(e)=> setData({
                                ...data,
                                name: e.target.value
                            })}
                        />

                    </div>

                    <div className='form-group'>
                        <label htmlFor= "email">Email</label>

                        <input 
                            type="email"
                            name="email"
                            className='form-control form-control-lg'
                            placeholder='Enter Email: '
                            value= {email}
                            onChange= {(e)=> setData({
                                ...data,
                                email: e.target.value
                            })}
                        />

                    </div>

                    <div className='form-group'>
                        <label htmlFor= "phone">Phone</label>

                        <input 
                            type="text"
                            name="phone"
                            className='form-control form-control-lg'
                            placeholder='Enter Phone No.: '
                            value={phone}
                            onChange= {(e)=> setData({
                                ...data,
                                phone: e.target.value
                            })}
                        />

                    </div>
                    <input
                        type="submit"
                        value="Add Contact"
                        className='btn btn-light btn-block'
                    />
                </form>
            </div>
        </div>
  )
}
