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
    const { idConver, match } = useParams()

    console.log("MI MATCH:", match)
    console.log("idConver:", idConver)

    const [room, setRoom] = useState('')

    const [messagesBack, setMessagesBack] = useState(undefined)
    const [messages, setMessages] = useState(undefined)
    const [user, setUser] = useState(undefined)
    const [message, setMessage] = useState('')
    const [conver, setConver] = useState(undefined)


    useEffect(() => {
        getMatch()
        setSocketConfig()

    }, [])


    const getMessages = () => {

        messagesService
            .getAllMessages(idConver)
            .then((response => {
                setMessagesBack(response.data)
            }))
            .catch(err => console.error(err))

    }

    const getMatch = () => {

        peopleService
            .getOneUser(match)
            .then((response => setUser(response.data[0])))
            .catch(err => console.log(err))
    }


    const setSocketConfig = () => {
        const username = loggedUser.username
        socket = io(process.env.REACT_APP_SOCKET_IO, {
            cors: {
                origin: process.env.REACT_APP_SOCKET_URL,
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


    useEffect(() => {
        socket.on("receiveMessages", message => {
            console.log("MENSAJE CREADO Y RECIBIDO___", message)
            getMessages()

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

        <>
            <div className="privateChat">
                <div className="postTopLeft">
                    <Link to={`/match/${user?._id}`}>
                        <img
                            className="postProfileImg"
                            src={user?.profileImages}
                            alt=""
                        />
                    </Link>
                    <span className="name-chat">{user?.username}    {user?.age} </span>
                </div>

                <hr></hr>

                <div className="feedWrapper">

                    {messagesBack?.map((elm, i) => <Post key={i} message={elm} />)}
                    <div ref={divRef}></div>

                </div>
                <form onSubmit={sendMessage} className="postBottom">
                    <input value={message} onChange={e => setMessage(e.target.value)} type="area" className="writeMessage" placeholder="escribe un mensaje..." />
                    <button className="send-msg"> ENVIAR</button>
                </form>
            </div>

        </>
    );
}
