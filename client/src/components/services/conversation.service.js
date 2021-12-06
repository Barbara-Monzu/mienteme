import axios from 'axios'

class ConversationService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/conversation`
    })
  }

  getAllConversation = () => this.app.get("/allConversations")
  createConversation = (newConver) => this.app.post("/new", newConver)
  addMessage = (message, conversation) => this.instance.put('/', { message, conversation })
}

export default ConversationService