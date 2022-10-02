import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState, useRef } from 'react'

export const useAuthStatus = () => {

    
    const [loggedIn, setloggedIn ] = useState( false )

    const [checkingStatus, setCheckingStatus] = useState(true)

    const isMounted = useRef(true);

    useEffect (()=> {
       
        if(isMounted){

            const auth= getAuth();
            onAuthStateChanged(auth, (user) => {

                if(user){
                    setloggedIn(true);
                }
    
                setCheckingStatus(false)
            })

        }

        return ()=> {
            isMounted.current= false;
        }

       
    }, [isMounted]) 


  return {loggedIn, checkingStatus }
}
