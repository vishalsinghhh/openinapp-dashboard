import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from '../utils/firebase'
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider()
    const GoogleLogin = async()=>{
        try {
            const result = await signInWithPopup(auth, googleProvider)
            if(result){
                navigate("/dashboard")
            }
            
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