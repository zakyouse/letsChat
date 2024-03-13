import "./App.css";
import Welcome from "./components/Welcome";
import ChatBox from "./components/ChatBox";
import Navigation from "./components/Navigation";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <Navigation />
      {user ? <ChatBox /> : <Welcome />}
    </>
  );
}

export default App;
