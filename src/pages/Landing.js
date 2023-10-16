import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from '../utils/firebase'

const Landing = () => {
    const googleProvider = new GoogleAuthProvider()
    const GoogleLogin = async()=>{
        try {
            const result = await signInWithPopup(auth, googleProvider)
            console.log(result.user);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
    <div><button onClick={()=>{GoogleLogin()}}><FcGoogle/> Sign in with Google</button></div>
    </div>
  )
}

export default Landing