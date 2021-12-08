
import { useEffect, useState } from "react";
import ServiceConversation from '../../services/conversation.service';
import ServiceMessages from '../../services/messages.service';
import EachConver from './pages/login/EachConver';

export default function Conversation({ currentUser }) {

  const [allConvers, setAllConvers] = useState([])

  const [matchsProfiles, setMatchsProfile] = useState([])

  const serviceConversation = new ServiceConversation()
  const serviceMessages = new ServiceMessages()

  useEffect(() => {
    getConversations()

  }, [])



 const getConversations = () => {
  let myConvers = serviceConversation.getAllConversations()
    .then(response => response.data)
    .catch(err => console.log(err))
  setAllConvers(myConvers)
  const matchsProfiles = myConvers.members.find((elm) => elm !== currentUser._id);
  setMatchsProfile(matchsProfiles)
}


  return (
    <>
    {allConvers.map((elm) => <EachConver infoConver={ elm }/>)}
    </>

   
  );
}
