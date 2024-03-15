import "./App.css";
import Welcome from "./components/Welcome";
import ChatBox from "./components/ChatBox";
import Navigation from "./components/Navigation";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "./components/Loader";
import React from "react";
function App() {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = React.useState(false);
  const [loadingIcon, setLoadingIcon] = React.useState(false);
  React.useEffect(() => {
    if (loading) {
      return;
    }
    if (!(user == null)) {
      setLoadingIcon(true);
    }
  }, [user]);
  return (
    <>
      {loadingIcon ? "" : <Loader />}
      <Navigation />
      {user ? <ChatBox /> : <Welcome userState={user} loading={setLoading} />}
    </>
  );
}

export default App;
