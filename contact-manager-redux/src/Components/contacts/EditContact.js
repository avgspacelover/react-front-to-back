import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios';
import {Context} from '../../context';
import { TextInputGroup } from '../layout/TextInputGroup';


export default function EditContact(props) {

    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        errors: {}
    })

    const [state,setState] = useContext(Context);


    useEffect(() => {
        const {id} = props.match.params;

        const fetchUserData=async()=>{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            
            const contact = res.data

            setData({
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
                errors: {}
            })
        }
        console.log(id)


        fetchUserData()
    },[props.match.params])


    const onSubmit = async(e) => {
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
        //data['id']= contacts.length+1
        //contacts.push(data)
        const {id} = props.match.params;

        const updContact = {
            name,
            email,
            phone
        }

        await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact)
            .then(res => {
                const editCont = res.data
                //contacts.push(res.data)
                const newContacts = contacts.map(contact=>
                    contact.id ===editCont.id ? (contact = editCont): contact
                )
                
                setState({contacts: newContacts})
            
            
            }) 

       // setState({contacts: newContacts})
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
            <div className='card-header'>Edit Contact</div>

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
                        type="text"
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



                    <div className='mx-auto'>

                        <input
                            type="submit"
                            value="Edit Contact"
                            className='btn btn-light btn-block mx-auto'
                        />

                    </div>
                    
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
