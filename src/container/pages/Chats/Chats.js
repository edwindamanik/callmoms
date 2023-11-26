import React, { useContext } from "react";
import "./Chats.css";
import Template from "../../template/";
import { ChatContext } from "../../../context/ChatContext";
import { Input, Messages } from "../../../components";
import { DoctorProfile } from "../../../assets/images";

const Chats = () => {
  const { data } = useContext(ChatContext);

  return (
    <Template>
      <div className="templateChat">
        <div className="image-profile-wrapper">
          <div className="image-profile">
            <img src={DoctorProfile} alt="" />
          </div>
          <p>Dr. {data.user?.displayName}</p>
        </div>
        <div className="chat-column">
          <div className="chat-template">
            <Messages />
          </div>
        </div>
        <div className="input-wrapper-chat">
          <Input />
        </div>
      </div>
    </Template>
  );
};

export default Chats;
