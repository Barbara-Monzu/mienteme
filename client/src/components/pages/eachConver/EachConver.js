
import { useEffect, useState, useContext } from "react";
import "./EachConver.css";
import UserContext from '../../services/UserContext'
import ServiceMessages from '../../services/messages.service';
import { Link, useHistory } from "react-router-dom";
import ConversationService from "../../services/conversation.service";
const serviceConversation = new ConversationService()

export default function EachConversation({ members, dateSelected, _id, createdAt, ...rest }) {

  const history = useHistory()
  const date = new Date(createdAt);
  // dateStr you get from mongodb

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

  const [userProfile, setUserProfile] = useState(undefined)
  const [lastMessage, setLastMessage] = useState("")


  useEffect(() => {

    _id && getLastMessage()

  }, [_id])


  useEffect(() => {

    (members[0]._id !== loggedUser._id) ? setUserProfile(members[0]) : setUserProfile(members[1])

  }, [_id])





  const getLastMessage = () => {
    serviceMessages.getLastMessage(_id)
      .then(response => {
        setLastMessage(response.data[0])
      })
      .catch(err => console.log(err))

  }

  const remove = () => {
    serviceConversation.delete(_id)
      .then(response => {
        rest.getConversations();
      })
      .catch(error => console.log(error))
  }


  return (
    <div className="global">

      <Link to={`/chat/${_id}/${userProfile?._id}`} style={{ textDecoration: "none", color: "black" }}>
        <div className="conversation">

          <div className="chatOnlineImgContainer">
            <p ><strong>{userProfile?.username}</strong> eligió: {dateSelected?.nameDate}</p>
            <img
              className="chatOnlineImg"
              src={userProfile?.profileImages}
              alt=""
            />
            {/* <div className="chatOnlineBadge"></div> */}
          </div>

          <p className="last-message">{lastMessage?.message}</p>
          <p className="d-m">{d} de {m}</p>


        </div>
      </Link>
      <div className="bachat">
        <img className="delete-icon" onClick={remove} src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-delete-miscellaneous-kiranshastry-solid-kiranshastry.png" />
      </div>

      <hr style={{ margin: "auto auto auto 80px" }} className="barra"></hr>


    </div>

  );
}
