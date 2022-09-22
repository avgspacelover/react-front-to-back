import React, {useEffect, useState} from 'react'
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

export const UserResults = () => {

    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true);



    useEffect( ()=> {

        fetchUsers()

    },[])

    const fetchUsers = async() => {

        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/`, {
            
            mode: 'cors',
            
            headers : {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })

        console.log('works',response)

        const data = await response.json()
        console.log('works again',data)

        setUsers(data) ;
        setLoading(false)
    }

  if(!loading){
    return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {users.map((user)=> (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
      )

  } else {
    return <Spinner />
  }
 
}
