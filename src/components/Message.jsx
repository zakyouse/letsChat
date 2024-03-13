import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
function Message(message) {
  const [user] = useAuthState(auth);
  return (
    <div
      className={`chat-bubble ${
        message.message.uid === user.uid ? "right" : ""
      }`}
    >
      <div className="chat-bubble-title">
        <img
          className="chat-bubble__left"
          src={message.message.avatar}
          alt="user avatar"
        />
        <p className="user-name">{message.message.name}</p>
      </div>
      <div className="chat-bubble__right">
        <p className="user-message">{message.message.text}</p>
      </div>
    </div>
  );
}

export default Message;
