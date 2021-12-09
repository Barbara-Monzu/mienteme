import { useContext, useEffect, useState, useRef } from "react";
import Post from "../post/Post.js";
// import Share from "../share/Share";
import "./PrivateChat.css";
import io from 'socket.io-client'
import MessagesService from "../../services/messages.service";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

let socket;

export default function PrivateChat({ infoConver }) {

//   const { user } = useContext(AuthContext);

const messagesService = new MessagesService()

const [messages, setMessages] = useState([])
const [message, setMessage] = useState('')
// const [userProfile, setUserProfile] = useState(undefined)


useEffect(() => {
//   getMyMessages()
  setSocketConfig()

}, [])

//   const getMyMessages = (idConver) => {
//     messagesService.getAllMessages(idConver)
//       .then(response => setMessages(response.data))
//       .catch(err => console.log(err))
//   }


  const setSocketConfig = () => {

    socket = io("//localhost:5005", {

      cors: {
        origin: "//localhost:3000",
        credentials: true
      }, transports: ['websocket']
    })

    socket.emit("conectado", "online");

  }

 useEffect(() => {
    socket.on("receiveMessages", message => {
        setMessages([...messages, message.message])
    
    })
        return () => {socket.off()}
    }, [messages])


const divRef = useRef(null);

useEffect(() => {
    divRef.current.scrollIntoView({behavior: "smooth"})
    })
     

  const sendMessage = (e) => {
    e.preventDefault()

    // messagesService
    //   .createMessage(message)
    //   .then(res => null)
    //   .catch(err => console.error(err))

    if (message !== "") {
      socket.emit('sendMessage', message)
      setMessage("")
    }

  }



  return (
    <div className="privateChat">
        <div className="feed">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
          
                        <img
                            className="postProfileImg"
                            src={"https://www.soyfutbol.com/__export/1611681055504/sites/debate/img/2021/01/26/ester_exposito_portada_crop1611681042130.jpg_1902800913.jpg"
                            }
                            alt=""
                        />
                    
                        <span className="postUsername">Bárbara</span>
                        <span className="postDate">26 años</span>

                    </div>
                </div>

                <hr></hr>
                
            </div>
        
                <div className="feedWrapper">
                <div>
                    {messages.map((elm, i) => <Post key={i} message={elm} />)}
                    <div ref={divRef}></div>
                </div>
                        <form onSubmit={sendMessage}className="postBottom">         
                            <input value={message} onChange={e => setMessage(e.target.value)} type="area" className="writeMessage" placeholder="escribe un mensaje..." />
                                <button> ENVIAR</button>
                        </form>
                </div>
        </div>
        
    </div>
  );
}


