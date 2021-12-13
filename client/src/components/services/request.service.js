import axios from 'axios'

class RequestService {
  constructor() {
    this.app = axios.create({
      baseURL: `http://localhost:5005/api/request`,
      withCredentials: true
    })
  }

  getAllRequestPending = () => this.app.get("/allRequestPending")

  getAllSecondsOpportunities = () => this.app.get("/allSecondsOpportunities")

  getOneRequest = (id) => this.app.get("/oneRequest")

  create = (idDate, user) => this.app.post(`/create/${idDate}`, user)

  answer = (idRequest, response) => this.app.put(`/${idRequest}`, response)
}

export default RequestService