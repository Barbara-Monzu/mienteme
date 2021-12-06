import axios from 'axios'

class UsersService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/people`
    })
  }

  getAllUsers = () => this.app.get("/allUsers")
  getOneUser = (id) => this.app.get(`/profile/${id}`)
  createDate = (newData) => this.app.post("/newDate", newData)
}

export default UsersService