import axios from 'axios'

class UsersService {
  constructor() {
    this.app = axios.create({
      baseURL: `http://localhost:5005/api/people`
    })
  }

  getAllUsers = () => this.app.get("/allUsers")
  getAllWomen = () => this.app.get("/allWomen")
  getAllMen = () => this.app.get("/allMen")
  getOneUser = (id) => this.app.get(`/profile/${id}`)
  createDate = (newData) => this.app.post("/newDate", newData)
}

export default UsersService