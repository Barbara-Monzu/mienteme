import axios from 'axios'

class ConversationService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/api/messages',
      withCredentials: true
    })
  }

  

  getAllMessages = (idConver) => this.app.get("/allMessages", idConver)

  getLastMessage = (idConver) => this.app.get('/lastMessage', idConver)

  // addMessage = (message, idConver) => this.app.post(`/addMessage/${idConver}`, message)

  createMessage = (message, idConver) => this.app.post('/createMessage', (message, idConver))
  
  deleteMessage = (idMessage, conversation) => this.app.delete(`/deleteMessage/${idMessage}`,  conversation )
}

export default ConversationService