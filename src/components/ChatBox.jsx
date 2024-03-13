import SendMessage from "./SendMessage";
import Message from "./Message";
import { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
function ChatBox() {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe;
  }, []);
  return (
    <main>
      {messages.length == 0 ? (
        <div className="warning">
          <h4>
            <i className="fa-solid fa-bell"></i> There are currently no messages
          </h4>
        </div>
      ) : (
        <div className="messages-wrapper">
          {messages?.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      )}

      {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  );
}

export default ChatBox;
