import axios from 'axios'

class ConversationService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/messages`,
      withCredentials: true
    })
  }

  

  getAllMessages = (idConver) => this.app.get(`/allMessages/${idConver}`)

  getLastMessage = (idConver) => this.app.get(`/lastMessage/${idConver}`)

  create = (message, idConver) => this.app.post(`/${idConver}`, message)
  
  deleteMessage = (idMessage, conversation) => this.app.delete(`/deleteMessage/${idMessage}`,  conversation )
}

export default ConversationService