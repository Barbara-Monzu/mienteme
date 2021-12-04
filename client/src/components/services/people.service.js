import axios from 'axios'

class UsersService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/api/users'
    })
  }

  getAllUsers = () => this.app.get("/allUsers")
  getOneUser = (id) => this.app.get(`/profile/${id}`)
  createDate = (newData) => this.app.post("/newDate", newData)
}

export default UsersService