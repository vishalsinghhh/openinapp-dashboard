import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import "./landing.css";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import discord from "../images/discord.svg";

const Landing = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result) {
        navigate("/dashboard");
      }

      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="landing">
        <div className="sideMain">
          <div className="logo">LOGO</div>
          <div className="board">Board.</div>
          <div className="icons">
            <div>
              <img src={github} alt="" className="imgMar img" />
            </div>
            <div>
              <img src={twitter} alt="" className="imgMar img" />
            </div>
            <div>
              <img src={linkedin} alt="" className="img" />
            </div>
            <div>
              <img src={discord} alt="" className="img" />
            </div>
          </div>
        </div>
        <div className="singIn">
          <div>Sign In</div>
          <div>Sign in to your account</div>
          <button
            onClick={() => {
              GoogleLogin();
            }}
          >
            <FcGoogle /> Sign in with Google
          </button>
          <button
            onClick={() => {
              GoogleLogin();
            }}
          >
            <AiFillApple /> Sign in with Apple
          </button>
          <div>
            <div>
              Email address
              <input type="text" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div>
              Password
              <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            Forgot password?
            <button>Sign In</button>
          </div>
          Don't have an account? Register here
        </div>
      </div>
    </>
  );
};

export default Landing;
