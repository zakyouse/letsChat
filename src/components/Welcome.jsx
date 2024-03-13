import logo from "../assets/ksclogo.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
function Welcome() {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  return (
    <>
      <div className="welcome--page">
        <h1 className="title">Welcome to KSC chat</h1>
        <img src={logo} alt="logo" className="welcome--logo" />
        <h3>Sign in Interact your with fellow comrades</h3>
        <button className="google--signin" onClick={googleSignIn}>
          <i className="fa-brands fa-google"></i>
          Sign In With Google
        </button>
      </div>
    </>
  );
}

export default Welcome;
