import React, { useContext } from "react";
import "./Card.css";
import { Image5 } from "../../assets/images/";
import { AuthContext } from "../../context/AuthContext";
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { ChatContext } from "../../context/ChatContext";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const navigate = useNavigate();

  const handleSelect = async (item) => {
    const combinedId =
      currentUser.uid > item.uid
        ? currentUser.uid + item.uid
        : item.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId))
      
      if (!res.exists()) {

        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: item.uid,
            displayName: item.displayName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", item.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        console.log('Berhasil');
        dispatch({ type: "CHANGE_USER", payload: item })
        navigate('/chat')
      }
      else {
        dispatch({ type: "CHANGE_USER", payload: item })
        navigate('/chat')
      }
    } catch (error) {
      
    }
    
  };

  return (
    data &&
    data.map((item) => (
      <div className="card-wrapper" key={item.uid}>
        <div className="image-card-wrapper">
          <img src={Image5} alt="Image5" />
        </div>
        <div className="detail-doctor">
          <div>
            <h4>{item.displayName}</h4>
            {/* <p>{item.job}</p> */}
          </div>
          {/* <div className="doctor-tags">
            {item.tags.map((tag) => (
              <p>{tag}</p>
            ))}
          </div> */}
          <div className="button-chat">
            <button type="button" onClick={() => handleSelect(item)}>Chat</button>
          </div>
        </div>
      </div>
    ))
  );
};

export default Card;
