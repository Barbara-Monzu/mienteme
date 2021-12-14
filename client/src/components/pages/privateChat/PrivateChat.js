import { useContext, useEffect, useState, useRef } from "react";
import Post from "../post/Post.js";
import "./PrivateChat.css";
import io from 'socket.io-client'
import MessagesService from "../../services/messages.service";
import UserContext from '../../services/UserContext'
import PeopleService from "../../services/people.service"
import ConversationService from "../../services/conversation.service"
import { useParams, Link } from 'react-router-dom'
const peopleService = new PeopleService()
const conversationService = new ConversationService()
const messagesService = new MessagesService()
let socket;

export default function PrivateChat() {

    const { loggedUser } = useContext(UserContext)
    const  {idConver, match } = useParams()
    
console.log("ahoraaaaaa", match)

    const [room, setRoom] = useState('')

    const [messagesBack, setMessagesBack] = useState(undefined)
    const [messages, setMessages] = useState(undefined)
    const [user, setUser] = useState(undefined)
    const [message, setMessage] = useState('')
    const [conver, setConver] = useState(undefined)

    const updateMessages = (message) => setMessages([...messages, message.message])
    // const setInitialMessages = () => setMessages(chat.messages.map(message => parseMessage(message, 'db')))


    useEffect(() => {
        getMatch()
        setSocketConfig()
      
        //cada vez q los mensaggesNuevos cambien imprímeme de nuevo esto
    }, [])

    // const setInitialMessages = () => setMessagesBack(getMessages())

    const getMessages = () => {
       messagesService
            .getAllMessages(idConver)
            .then((response => {
                setMessagesBack(response.data)}))
            .catch(err => console.error(err))
                console.log("MENSAJES:", messagesBack)
    }

    const getMatch = () => {
        peopleService.getOneUser(match)
        .then((response => {
            console.log("AAAAAAAAA", response.data[0])
            setUser(response.data[0])
        }))
        .catch(err => console.log(err))
    }



    const setSocketConfig = () => {

        const username = loggedUser.username

        socket = io("//localhost:5005", {

            cors: {
                origin: "//localhost:3000",
                credentials: true
            }, transports: ['websocket']
        })

        const roomName = [user?._id.split(""), loggedUser?._id.split("")].sort().join("")
        setRoom(`${roomName}`)

        socket.emit('join', { username, room: room }, () => {
            getMessages()
        })

        socket.emit("conectado", "online");

    }



    //Envío mensajes y los recibo. ¿Porqué si pongo al revés estos dos funciones me da error? No lee el useEffect()

    useEffect(() => {
        socket.on("receiveMessages", message => {
            console.log("DESPUES DE COMER_____________", message)
           
            setMessagesBack([...messagesBack, message])

        })
        return () => { socket.off() }
    }, [message])


    const sendMessage = (e) => {
        e.preventDefault()

        if (message !== "") {
            socket.emit("sendMessage", message)
            setMessage("")
        }

        const newMessage = {
            message: message,
            sender: loggedUser._id,
            receiver: user._id
        }

        messagesService
            .create(newMessage, idConver)
            .then(response => console.log("CREANDO MENSAJE", response.data))
            .catch(err => console.error(err))

    }


    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: "smooth" })
    })


    return (
        <div className="privateChat">
            <div className="feed">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                        <Link to={`/match/${user?._id}`}>
                            <img
                                className="postProfileImg"
                                src={user?.profileImages}
                                alt=""
                            />
                        </Link>
                            {/* <span className="postUsername">{messages.messages}</span> */}
                            <span className="postDate">{user?.username}</span>
                            <span className="postDate">{user?.age}</span>

                        </div>
                    </div>

                    <hr></hr>

                </div>
                {messagesBack && (
                <div className="feedWrapper">
                    <div>
                        {messagesBack?.map((elm, i) => <Post key={i} message={elm} />)}
                        <div ref={divRef}></div>
                    </div>
                    <form onSubmit={sendMessage} className="postBottom">
                        <input value={message} onChange={e => setMessage(e.target.value)} type="area" className="writeMessage" placeholder="escribe un mensaje..." />
                        <button> ENVIAR</button>
                    </form>
                </div>) }
            </div>

        </div>
    );
}
