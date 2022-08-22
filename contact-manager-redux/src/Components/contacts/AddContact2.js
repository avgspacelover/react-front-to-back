import React, {useRef } from 'react'

export default function AddContact() {

   

    const nameRef = useRef('')
    const emailRef = useRef('')

    const phoneRef = useRef('')


    const onSubmit = (e) => {
        e.preventDefault() ;

        const contact = {
            name: nameRef.current.value,

            email: emailRef.current.value,

            phone: phoneRef.current.value,


        }

        console.log(contact)
    }
  

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
                            ref={nameRef}
                            
                        />

                    </div>

                    <div className='form-group'>
                        <label htmlFor= "email">Email</label>

                        <input 
                            type="email"
                            name="email"
                            className='form-control form-control-lg'
                            placeholder='Enter Email: '
                            ref= {emailRef}
                           
                        />

                    </div>

                    <div className='form-group'>
                        <label htmlFor= "phone">Phone</label>

                        <input 
                            type="text"
                            name="phone"
                            className='form-control form-control-lg'
                            placeholder='Enter Phone No.: '
                            ref={phoneRef}
                           
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
