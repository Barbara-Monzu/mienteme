import "./Post.css";
// import { MoreVert } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
// import { format } from "timeago.js";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

import ServiceMessages from '../../services/messages.service';

export default function Post({ post }) {

const serviceMessages = new ServiceMessages()
const [userProfile, setUserProfile] = useState(undefined)
const [messages, setMessages] = useState([])

useEffect(() => {
  getMyMessages()

}, [])

  const getMyMessages = (idConver) => {
    serviceMessages.getAllMessages(idConver)
      .then(response => setMessages(response.data))
      .catch(err => console.log(err))

  }

  // messages.creator === currentUser._id ? 
  // SACAR MENSAJES A LA DERECHA Y EN AZUL : SACARLOS A LA IZQUIERDA Y EN BLANCO

  

  return (
    <div className="post">
         
      <div className="postCenter">
          <span className="postText">¿Quieres ir a escalar baby?</span>
       </div>
      
      
    </div>
  );
}
