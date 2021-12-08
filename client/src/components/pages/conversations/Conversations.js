
import { useEffect, useState } from "react";
import ServiceConversation from '../../services/conversation.service';

import EachConver from './pages/login/EachConver';

export default function Conversation({ currentUser }) {

  const [allConvers, setAllConvers] = useState([])

  const serviceConversation = new ServiceConversation()


  useEffect(() => {
    getConversations()

  }, [])


 const getConversations = () => {
  let myConvers = serviceConversation.getAllConversations()
    .then(response => response.data)
    .catch(err => console.log(err))
  setAllConvers(myConvers)

}


  return (
    <>
    {allConvers.map((elm) => <EachConver infoConver={ elm }/>)}
    </>

   
  );
}
