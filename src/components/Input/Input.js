import React, { useContext, useState } from "react";
import "./Input.css";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { v4 as uuid } from "uuid";

const Input = () => {
  const [text, setText] = useState("");

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    try {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });

      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [data.chatId + ".lastMessage"]: {
            text
        },
        [data.chatId+".date"]: serverTimestamp()
      })

      await updateDoc(doc(db, "userChats", data.user.uid), {
        [data.chatId + ".lastMessage"]: {
            text
        },
        [data.chatId+".date"]: serverTimestamp()
      })

      setText("")

    } catch (error) {
      console.log("err", error);
    }

  };

  return (
    <div className="input-wrapper-component">
      <input
        className="input-custome"
        placeholder="Masukkan pesan anda disini"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Input;
