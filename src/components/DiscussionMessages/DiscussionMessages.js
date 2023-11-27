import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import Message from "../Message/Message";

const DiscussionMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "forum", "DflfkKfNoV4Qiqy7dpsi"),
      (doc) => {
        doc.exists() && setMessages(doc.data().messages);
      }
    );

    return () => {
      unSub();
    };
  }, []);

  return (
    <div>
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};
export default DiscussionMessages;
