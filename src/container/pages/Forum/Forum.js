import React, { useContext, useState } from "react";
import "./Forum.css";
import Template from "../../template/";
import { DiscussionMessages } from "../../../components";
import { Timestamp, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { AuthContext } from "../../../context/AuthContext";
import { v4 as uuid } from "uuid";

const Forum = () => {
  const [text, setText] = useState("");

  const { currentUser } = useContext(AuthContext);

  const handleSend = async () => {
    try {
      await updateDoc(doc(db, "forum", "DflfkKfNoV4Qiqy7dpsi"), {
        messages: arrayUnion({
          id: uuid(),
          name: currentUser.displayName,
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });

      setText("");
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <Template>
      <div className="templateChat">
        <div className="chat-column">
          <div className="chat-template">
            <DiscussionMessages />
          </div>
        </div>
        <div className="input-wrapper-chat">
          <div className="input-wrapper-component">
            <input
              className="input-custome"
              placeholder="Masukkan pesan anda disini"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Forum;
