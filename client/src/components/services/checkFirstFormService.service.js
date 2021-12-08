import axios from 'axios'

class CheckFirstFormService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/api/checkForm'
    })
  }

  check = () => this.app.get("/")

}

export default CheckFirstFormService