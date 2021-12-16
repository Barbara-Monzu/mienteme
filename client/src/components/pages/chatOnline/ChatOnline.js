
import { useEffect, useState } from "react";
import "./ChatOnline.css";
import ConversationService from "../../services/conversation.service";
import EachConver from '../eachConver/EachConver';

const serviceConversation = new ConversationService()

export default function ChatOnline() {


  const [conversations, setConversations] = useState(undefined);
  const [filteredConversations, setfilteredConversations] = useState(undefined);

  useEffect(() => {
    getConversations()

  }, []);

  const getConversations = () => {
    serviceConversation.getAllConversations()
      .then(response => {
        setConversations(response.data)
      })
      .catch(error => console.log(error))
  }


  return (
    <div className="chatOnline">
      <h1>Chat</h1>
      <input type="searchbar" className="searchBar" placeholder="buscar a..." />

      {conversations?.map((elm, index) => <EachConver getConversations={getConversations} key={index} {...elm} />)}


    </div>
  );
}
