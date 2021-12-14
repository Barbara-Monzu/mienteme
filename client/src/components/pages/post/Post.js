import "./Post.css";


// import { format } from "timeago.js";

// import { AuthContext } from "../../context/AuthContext";


export default function Post({ message }) {


  // messages.creator === currentUser._id ? 
  // SACAR MENSAJES A LA DERECHA Y EN AZUL : SACARLOS A LA IZQUIERDA Y EN BLANCO

  return (
    <div className="post">
         
      <div className="postCenter">
          <span className="postText">{message.message}</span>
       </div>
      
      
    </div>
  );
}
