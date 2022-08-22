import React, { useEffect, useState } from 'react';
import axios from 'axios'
export const Context = React.createContext()



const Provider = (props)=> {
    const [state, setState] = useState({
        contacts: []
    })


    useEffect( ()=> {
        
        const fetchData= async() => {
            await axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response=> setState({contacts: response.data}))

        }

        fetchData()

    },[])

    return (
        <Context.Provider  value={[state, setState]}>
            {props.children}
        </Context.Provider>

    )
}


export default Provider;

export const Consumer = Context.Consumer;



/*

{ contacts: [
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
                id: 3,
                name: 'Ace Parker',
                email: 'aparker@gmail.com',
                phone: '111-111-1111'
            }
        ]
    })
    */