import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import discord from "../images/discord.svg";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Home=()=> {
  const router = useNavigate()
  const [user] = useAuthState(auth);
  if(!user){
    router("/");
  }
  
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const googleProvider = new GoogleAuthProvider();

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result) {
        router("/dashboard");
      }

      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className='landing'>
        <div className='sideMain'>
          <div className='logo'>LOGO</div>
          <div className='board'>Board.</div>
          <div className='icons1'>
            <div>
              <img
                src={github}
                alt=""
                className='imgMar img'
              />
            </div>
            <div>
              <img
                src={twitter}
                alt=""
                className='imgMar img'
              />
            </div>
            <div>
              <img src={linkedin} alt="" className="img"/>
            </div>
            <div>
              <img src={discord} alt="" className="img" />
            </div>
          </div>
        </div>
        <div className="singIn">
          <div className="signInHead">
            {isSignIn ? "Sign In" : "Sign Up"}
          </div>
          <div>Sign {isSignIn?'in':'up'} to your account</div>
          <div className="flex">
            <button
              onClick={() => {
                GoogleLogin();
              }}
              className="gBTN"
            >
              <FcGoogle className="FcGoogle" /> Sign {isSignIn?'in':'up'} with Google
            </button>
            <button
              onClick={() => {
                GoogleLogin();
              }}
              className="gBTN"
            >
              <AiFillApple className="FcGoogle" /> Sign {isSignIn?'in':'up'} with Apple
            </button>
          </div>
          <div className="userInput1">
            <div className="flexCol">
              <div className="emailHead">Email address</div>

              <input
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flexCol">
              <div className="passHead">Password</div>

              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            {isSignIn && <p className="forgot">Forgot password?</p>}
            {!isSignIn && <p className="forgot"></p>}
            
            {isSignIn && <button
              onClick={() => {
                signIn();
              }}
              className="mainBTN"
            >
              Sign In
            </button>}
            {!isSignIn && <button
              onClick={() => {
                signUp();
              }}
              className="mainBTN"
            >
              Sign Up
            </button>}
            
          </div>
          <div className="notAcc">{isSignIn ? `Don't`:'Already'} have an account? <span className="register" onClick={()=>{setIsSignIn(!isSignIn)}}>{isSignIn ? `Register`:'Login'} here</span></div>
        </div>
      </div>
    </>
  );
}

export default Home