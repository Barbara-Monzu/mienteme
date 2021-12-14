import axios from 'axios'

class ConversationService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/api/conversation',
      withCredentials: true
    })
  }

  getAllConversations = () => this.app.get("/")

  create = (idDate, idOtherUser) => this.app.post(`/create/${idDate}`, idOtherUser)

  getOne = (idDate) => this.app.get(`private/${idDate}`)

  delete = (idConver) => this.app.delete(`/${idConver}`)

}

export default ConversationService// class AllUsers extends Component {
  //   constructor() {
  //     super()
  