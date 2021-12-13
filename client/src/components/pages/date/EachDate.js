
import { useEffect, useState } from "react";
import ServiceMessages from '../../services/messages.service';
import { Link } from "react-router-dom";

export default function EachDate({ nameDate }) {
  
const serviceMessages = new ServiceMessages()

const [userProfile, setUserProfile] = useState(undefined)
const [lastMessage, setLastMessage] = useState("")



  return (
    <>
 <Link to="/" style={{margin: "10px"}}>
        

    <div className="conversation">
      
      <div className="chatOnlineImgContainer">
      <p>{nameDate}</p>
            <div className="chatOnlineBadge"></div>
        </div>

      <div className="date">
       <div>
            {/* <span className="conversationName">{userProfile.username}, {userProfile.age}</span>
            <p className="message">{lastMessage}</p> */}

        </div>

        <p>10 dic.</p>

      </div>

    </div>

    <hr></hr>
  </Link>
    </>
   
  );
}
