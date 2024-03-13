import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import logo from "../assets/ksclogo.png";
import "../App.css";
function Navigation() {
  const [user] = useAuthState(auth);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };
  return (
    <>
      <nav>
        <div className="logo--section">
          <img src={logo} alt="KSC Logo" className="logo--image" />
          <h3>KSC.Chat.io</h3>
        </div>
        <h1 className="platform--title">Kenya Science Chat Platform</h1>
        <div className="profile">
          {user ? (
            <button onClick={signOut}>Sign Out</button>
          ) : (
            <button onClick={googleSignIn}>Sign In</button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navigation;
