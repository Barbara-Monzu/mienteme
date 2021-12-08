import axios from 'axios'

class ConversationService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/api/messages'
    })
  }

  

  getAllMessages = () => this.app.get("/allMessages")

  createMessage = (message, conversation) => this.app.post('/createMessage', (message, conversation))
  
  deleteMessage = (idMessage, conversation) => this.app.put(`/delete-message/${idMessage}`,  conversation )
}

export default ConversationService