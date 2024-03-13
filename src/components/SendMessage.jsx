import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function SendMessage({ scroll }) {
  const [message, setMessage] = useState("");
  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form
      onSubmit={(event) => sendMessage(event)}
      className="send--message"
      autoComplete="off"
    >
      <input
        placeholder="Enter message..."
        type="text"
        name="message"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="send--btn">
        <i className="fa-solid fa-paper-plane"></i>
      </button>
    </form>
  );
}

export default SendMessage;
