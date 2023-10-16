import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import "./landing.css";
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"
import twitter from '../images/twitter.svg'
import discord from '../images/discord.svg'

const Landing = () => {
  const navigate = useNavigate();
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
            <div>LOGO</div>
            <div>Board</div>
            <div>
                <img src={github} alt="" className="imgMar"/>
            </div>
            <div>
                <img src={twitter} alt="" className="imgMar"/>
            </div>
            <div>
                <img src={linkedin} alt="" />
            </div>
            <div>
                <img src={discord} alt="" />
            </div>
        </div>
        <div>
          <button
            onClick={() => {
              GoogleLogin();
            }}
          >
            <FcGoogle /> Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
