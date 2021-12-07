
import { useEffect, useState } from "react";
import "./Conversation.css";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState();
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;

//   useEffect(() => {
//     const friendId = conversation.members.find((m) => m !== currentUser._id);

//     const getUser = async () => {
//       try {
//         const res = await axios("/users?userId=" + friendId);
//         setUser(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getUser();
//   }, [currentUser, conversation]);

  return (
    <>
    <div className="conversation">

      <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={"https://www.soyfutbol.com/__export/1611681055504/sites/debate/img/2021/01/26/ester_exposito_portada_crop1611681042130.jpg_1902800913.jpg"}
              alt=""
            />
            <div className="chatOnlineBadge"></div>
        </div>

      <div className="date">
       <div>
            <span className="conversationName">Ester, 25</span>
            <p className="message">Vente pa Alcalá que estoy sola</p>

        </div>

        <p>10 dic.</p>
      </div>

    </div>

    <hr></hr>
    </>

   
  );
}
