import axios from 'axios'

class ConversationService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/api/conversation',
      withCredentials: true
    })
  }

  getAllConversations = () => this.app.get("/")

  create = (idOtherUser, idDate) => this.app.post(`/create/${idDate}`, idOtherUser)

  getOne = (idOtherUser, id) => this.app.get(`private/${idOtherUser}`, id)


}

export default ConversationService// class AllUsers extends Component {
  //   constructor() {
  //     super()
  