
import { useEffect, useState, useContext } from "react";
import "./EachConver.css";
import UserContext from '../../services/UserContext'
import ServiceMessages from '../../services/messages.service';
import { Link } from "react-router-dom";
import ConversationService from "../../services/conversation.service";
const serviceConversation = new ConversationService()

export default function EachConversation({ members, dateSelected, _id, createdAt }) {

  var date = new Date(createdAt);  // dateStr you get from mongodb

  const monthName = {
    [1]: 'Enero',
    [2]: 'Febrero',
    [3]: 'Marzo',
    [4]: 'Abril',
    [5]: 'Mayo',
    [6]: 'Junio',
    [7]: 'Julio',
    [8]: 'Agosto',
    [9]: 'Septiembre',
    [10]: 'Octubre',
    [11]: 'Noviembre',
    [12]: 'Diciembre',
  }

  const d = date.getDate();
  let m = date.getMonth() + 1;
  m = monthName[m].slice(0, 3)

  
  const serviceMessages = new ServiceMessages()
  const { loggedUser } = useContext(UserContext)
  console.log("mira este id a las 12", _id)
  console.log("dateSelected", dateSelected)

  const [userProfile, setUserProfile] = useState(undefined)
  const [lastMessage, setLastMessage] = useState("")

  //DESCOMENTAR

  useEffect(() => {

    _id && getLastMessage
      (members[0]._id !== loggedUser._id) ? setUserProfile(members[0]) : setUserProfile(members[1])
  }, [])


  const getLastMessage = () => {
    serviceMessages.getLastMessage(_id)
      .then(response => {
        setLastMessage(response.data[0])
      })
      .catch(err => console.log(err))

  }

  const remove = (_id) => {
    const idConver = _id
    console.log("Marcusss", _id)
    serviceConversation.delete(idConver)
      .then(response => {
        console.log("borrando una conver --------", response.data)
      })
      .catch(error => console.log(error))
  }

  console.log("LAST MESSAGE", lastMessage)

  return (
    <>

      <div className="conversation">

        <div className="chatOnlineImgContainer">
          <Link to={`/chat/${_id}/${userProfile?._id}`} style={{ margin: "10px" }}>
            <img
              className="chatOnlineImg"
              src={userProfile?.profileImages}
              alt=""
            />
          </Link>
          <div className="chatOnlineBadge"></div>
        </div>

        <div className="date">
          <div>
            <p>{dateSelected?.nameDate}</p>
            <span className="conversationName">{userProfile?.username}, {userProfile?.age}</span>
            <p>{d} de {m}</p>

          </div>
          <p>{lastMessage?.message}</p>
          <button onClick={() => remove(_id)} > Eliminar</button>


        </div>
      </div>

      <hr></hr>
    </>

  );
}
