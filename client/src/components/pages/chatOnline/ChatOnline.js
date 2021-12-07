
import { useEffect, useState } from "react";
import "./ChatOnline.css";
import Conversation from "../conversations/Conversation";

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
//   const [friends, setFriends] = useState([]);
//   const [onlineFriends, setOnlineFriends] = useState([]);
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;

//   useEffect(() => {
//     const getFriends = async () => {
//       const res = await axios.get("/users/friends/" + currentId);
//       setFriends(res.data);
//     };

//     getFriends();
//   }, [currentId]);

//   useEffect(() => {
//     setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
//   }, [friends, onlineUsers]);

//   const handleClick = async (user) => {
//     try {
//       const res = await axios.get(
//         `/conversations/find/${currentId}/${user._id}`
//       );
//       setCurrentChat(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

  return (
    <div className="chatOnline">
        <h1>Chat</h1>
        <input type="searchbar" className="" placeholder="mensajes"/>
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
    </div>
  );
}
