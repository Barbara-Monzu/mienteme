import axios from 'axios'

class ConversationService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/api/conversation',
      withCredentials: true
    })
  }

  getAllConversations = () => this.app.get("/all")

  create = (idOtherUser, idDate) => this.app.post(`/create/${idDate}`, idOtherUser)


}

export default ConversationService// class AllUsers extends Component {
  //   constructor() {
  //     super()
  