import {createContext, useState, useReducer } from 'react';
// import githubReducer from './GithubReducers';
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN



export const GithubProvider = ({children}) => {

    // const initialState = {
    //     users: [],
    //     loading: true
    // }

    //const [state, dispatch] = useReducer(githubReducer, initialState)
    
    const [users, setUsers] = useState([])
    const [loading, setLoading]= useState(true)

    const fetchUsers = async() => {

        const response = await fetch(`${GITHUB_URL}/users`, {
            
            mode: 'cors',
            
            headers : {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        console.log('works',response)

        const data = await response.json()
        //console.log('works again',data)

        setUsers(data) ;
        setLoading(false)
    }

    return <GithubContext.Provider value={{
        users,
        loading,
        fetchUsers
    }}>

        {children}
    </GithubContext.Provider>


}


export default GithubContext;