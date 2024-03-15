import logo from "../assets/ksclogo.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import Footer from "./Footer";
import React from "react";
function Welcome(prop) {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    if (prop.userState === null) {
      prop.setLoading(true);
    }
  };

  return (
    <>
      <div className="welcome--page">
        <h1 className="title">Welcome to KSC chat</h1>
        <img src={logo} alt="logo" className="welcome--logo" />
        <h3 className="welcome--message">
          Sign in to Interact with your fellow comrades
        </h3>
        <button className="google--signin" onClick={googleSignIn}>
          <i className="fa-brands fa-google"></i>
          Sign In With Google
        </button>
        <Footer />
      </div>
    </>
  );
}

export default Welcome;
