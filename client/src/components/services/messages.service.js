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

  createMessage = (message, conversation) => this.app.post('/createMessage', (message, conversation))
  
  deleteMessage = (idMessage, conversation) => this.app.put(`/delete-message/${idMessage}`,  conversation )
}

export default ConversationService