import React, { useContext, useEffect, useRef } from "react";
import "./Message.css";
import { AuthContext } from "../../context/AuthContext";
// import { ChatContext } from "../../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: "smooth"}) 
  }, [message])

  console.log(message);
  return (
    <div ref={ref} style={{ display: "flex" }}>
      <div
        className={`${
          message.senderId === currentUser.uid
            ? "message-wrapper-sender"
            : "message-wrapper-reciever"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};

export default Message;
