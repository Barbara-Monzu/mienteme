
import { useEffect, useState } from "react";
import ServiceMessages from '../../services/messages.service';
import { Link } from "react-router-dom";

export default function EachDate({ nameDate, description, day }) {
  
const serviceMessages = new ServiceMessages()

const [userProfile, setUserProfile] = useState(undefined)
const [lastMessage, setLastMessage] = useState("")

// console.log("MIRO EL CREADOR DE LA CITA ", creator)

  return (
    <>
    
    
        
<Link to="/" style={{margin: "10px", textDecoration:"none"}}>

    <div className="conversation">
      
      <div className="chatOnlineImgContainer">
      <p>{nameDate}</p>
      <p>{description}</p>
      
    
      {/* <p>{creator.username}</p> */}
      

        </div>

      <div className="date">

      <p>{day}</p>

      </div>

    </div>
  </Link>

    <hr></hr>
    </>
   
  );
}
