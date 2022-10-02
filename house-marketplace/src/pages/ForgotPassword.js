import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';


import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'

export const ForgotPassword = () => {

  const [email, setEmail] = useState();

  const onChange= (e) => {

    setEmail(e.target.value)

  }

  const onSubmit = async(e)=> {
    e.preventDefault();

    try {

      const auth= getAuth();
      await sendPasswordResetEmail(auth, email);
  
      toast.success('email was sent')
  
  
    } catch(error) {

      toast.error('Unable to Change Password! , try after a while')
    }

   
  }
  return (
    <div  className='pageContainer'>

      <header >
        <p className='pageHeader'>
           Forgot Password
        </p>
      </header>

      <main>

        <form onSubmit={onSubmit}>
          <input 
            type='email' 
            className='emailInput' 
            placeholder='Email' 
            value={email}
            id='email'  
            onChange={onChange} 
          />

          <Link className='forgotPasswordLink' to='/sign-in' >
            Sig In
          </Link>
        </form>

        <div  className='signInBar'>
          <div className='signInText' >
            Send Reset Link
          </div>

          <button className='signInButton' >
            <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
          </button>

        </div>
      </main>

    </div>
  )
}
