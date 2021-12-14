
import { useEffect, useState, useContext } from "react";
import "./EachConver.css";
import UserContext from '../../services/UserContext'
import ServiceMessages from '../../services/messages.service';
import { Link } from "react-router-dom";
import ConversationService from "../../services/conversation.service";
const serviceConversation = new ConversationService()

export default function EachConversation({ members, dateSelected, _id }) {
  
const serviceMessages = new ServiceMessages()
const { loggedUser } = useContext(UserContext)
console.log("mira este id a las 12", _id)

const [userProfile, setUserProfile] = useState(undefined)
const [lastMessage, setLastMessage] = useState("")

//DESCOMENTAR

useEffect(() => {
   (members[0]._id !== loggedUser._id) ? setUserProfile(members[0]) : setUserProfile(members[1])
  
  }, [])


// const getUserProfile = () => {
// let profile = infoConver.members.find((elm) => elm !== currentUser._id);
//     setUserProfile(profile)
// }

  const getLastMessage = (infoConver) => {
    serviceMessages.getLastMessage(infoConver._id)
      .then(response => {
        setLastMessage(response.data)
      })
      .catch(err => console.log(err))

  }

    const remove = (_id) => {
      const idConver =  _id
      console.log("Marcusss", _id )
      serviceConversation.delete(idConver)
      .then(response => {
        console.log("borrando una conver --------", response.data)
      })
      .catch(error => console.log(error))
  }

  //pasarle como prop la infoConver

  //si hace click en la conver && <Post >

  return (
    <>
        
    <div className="conversation">
      
      <div className="chatOnlineImgContainer">
 <Link to={`/chat/${_id}/${userProfile?._id}`} style={{margin: "10px"}}>
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
            <span className="conversationName">{userProfile?.username}, {userProfile?.age}</span>
            <p className="message">{dateSelected?.description}</p>

        </div>
        <p>{userProfile?.createdAt}</p>
       <button onClick={() => remove(_id)} > Eliminar</button>
       

      </div>
    </div>

    <hr></hr>
    </>
   
  );
}
