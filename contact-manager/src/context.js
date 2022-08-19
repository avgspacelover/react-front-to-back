import React from 'react';

const Context = React.createContext()


const Provider = (props)=> {
    const state = { contacts: [
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
        ]
    }

    return (
        <Context.Provider  value={state}>
            {props.children}
        </Context.Provider>

    )
}


export default Provider;

export const Consumer = Context.Consumer