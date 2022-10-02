import { getAuth } from 'firebase/auth'
import React, { useEffect, useState } from 'react'


export const Profile = () => {

  const auth = getAuth();

  const [formData, setFormData] = useState({

    name:auth.currentUser.displayName,
    email: auth.currentUser.email
  });




  return (
    
    <>
      <h1>Profile</h1>
      {user ? 
        <h2>
          {user.displayName}
        </h2> :
        <h2>Not Logged In</h2>
    
      }
    </>
  )
}
