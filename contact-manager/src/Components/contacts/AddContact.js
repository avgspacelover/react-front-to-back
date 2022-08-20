import React, { useState, useContext } from 'react'

import {Context} from '../../context';
import { TextInputGroup } from '../layout/TextInputGroup';


export default function AddContact() {

    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        errors: {}
    })

    const [state,setState] = useContext(Context);


    const onSubmit = (e) => {
        e.preventDefault() ;
        console.log(data, state)

        if(name===''){
            setData({...data, errors: {name: 'Name is required!'}})
            return
        }

        if(email===''){
            setData({...data, errors: {email: 'Email is required!'}})
            return
        }

        if(phone===''){
            setData({...data, errors: {phone: 'Phone is required!'}})
            return
        }

        const {contacts}= state
        data['id']= contacts.length+1
        contacts.push(data)
        const newContacts = contacts

        setState({contacts: newContacts})
        setData({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })
    }
  
    const {name,email, phone, errors}= data
    return (
        
        <div className='card mb-3'>
            <div className='card-header'>Add Contact</div>

            <div className='card-body'>
                <form onSubmit={onSubmit}>

                    <TextInputGroup
                        type="text"
                        label="Name"
                        name="name"
                        placeholder="Enter Name:"
                        value={name}
                        onChange={(e)=> setData({
                            ...data,
                            name: e.target.value
                        })}
                        error= {errors.name}
                    />
                    <TextInputGroup
                        type="email"
                        label="Email: "
                        name="email"
                        placeholder="Enter Email:"
                        value={email}
                        onChange={(e)=> setData({
                            ...data,
                            email: e.target.value
                        })}
                        error= {errors.email}

                    />
                    <TextInputGroup
                        type="number"
                        label="Phone No. :"
                        name="phone"
                        placeholder="Enter Phone No.:"
                        value={phone}
                        onChange={(e)=> setData({
                            ...data,
                            phone: e.target.value
                        })}
                        error= {errors.phone}

                    />



                  
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




/* <div className='form-group'>
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
*/
