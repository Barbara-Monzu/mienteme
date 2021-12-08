import axios from 'axios'

class RequestService {
  constructor() {
    this.app = axios.create({
      baseURL: `http://localhost:5005/api/request`
    })
  }

  getAllRequestPending = () => this.app.get("/allRequestPending")
  getAllSecondsOpportunities = () => this.app.get("/allSecondsOpportunities")
  createRequest = (id, idDate, newRequest) => this.app.post(`/create/${id}/${idDate}`, newRequest)
  answerRequest = ( idRequest, answer ) => this.app.post(`/answer/${idRequest}`, answer)
}

export default RequestService