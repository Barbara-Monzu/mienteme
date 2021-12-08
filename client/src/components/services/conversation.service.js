import axios from 'axios'

class ConversationService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/api/conversation'
    })
  }

  getAllConversations = () => this.app.get("/all")
  createConversation = (idDate) => this.app.post(`/created/${idDate}`)

}

export default ConversationService// class AllUsers extends Component {
  //   constructor() {
  //     super()
  