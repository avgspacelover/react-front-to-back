import {createContext, useReducer } from 'react';
import githubReducer from './GithubReducers';
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN



export const GithubProvider = ({children}) => {

    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)
    
    //const [users, setUsers] = useState([])
    //const [loading, setLoading]= useState(true)


    const setLoading = ()=> dispatch({type: 'SET_LOADING'})

    const searchUsers = async(text) => {

        setLoading()
        const params = new URLSearchParams({
            q:text
        })
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            
            mode: 'cors',
            
            headers : {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })

        console.log('works',response)

        const {items} = await response.json()
        //console.log('works again',data)


        dispatch({
            type: 'GET_USERS',
            payload: items
        })

        //setUsers(data) ;
        //setLoading(false)
    }

    const clearUsers = () => {

        dispatch({type: 'CLEAR_USERS'})
    }


    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers
    }}>

        {children}
    </GithubContext.Provider>


}


export default GithubContext;