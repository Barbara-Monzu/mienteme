import axios from 'axios'

class RequestService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/request`,
      withCredentials: true
    })
  }

  getAllRequestPending = () => this.app.get("/allRequestPending")

  getRequestCreatedForMe = () => this.app.get("/myRequestsCreated")

  getAllSecondsOpportunities = () => this.app.get("/allSecondsOpportunities")

  getOneRequest = (id) => this.app.get("/oneRequest")

  create = (idDate, user) => this.app.post(`/create/${idDate}`, user)

  answer = (idRequest, response) => this.app.put(`/${idRequest}`, response)

  delete = (idRequest) => this.app.delete(`/${idRequest}`)
}

export default RequestService