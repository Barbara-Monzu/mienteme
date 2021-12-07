import axios from 'axios'

class ConversationService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/api/conversation'
    })
  }

  // getAllConversations = () => this.app.get("/all")
  createConversation = (idDate) => this.app.post(`/created/${idDate}`)

  getAllMessages = () => this.app.get("/allMessages")

  createMessage = (message, conversation) => this.app.post('/createMessage', (message, conversation))
  
  deleteMessage = (idMessage, message, conversation) => this.app.put(`/delete-message/${idMessage}`, { message, conversation })
}

export default ConversationService