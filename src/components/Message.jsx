import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
function Message(message) {
  const [user] = useAuthState(auth);
  const timestamp = message.message.createdAt;
  const jsDate = new Date(
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
  );
  const formattedLocalTime = jsDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div
      className={`chat-bubble ${
        message.message.uid === user.uid ? "right" : ""
      }`}
    >
      <img
        className={`${
          message.message.uid === user.uid ? "right--img" : "left--img"
        }`}
        src={message.message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble-title">
        <p className="user-name">{message.message.name}</p>
      </div>
      <div className="chat-bubble__right">
        <p className="user-message">{message.message.text}</p>
      </div>
      <div className="time">
        <p className="time--text">{formattedLocalTime}</p>
      </div>
    </div>
  );
}

export default Message;
