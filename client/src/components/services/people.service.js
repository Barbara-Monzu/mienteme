import axios from 'axios'

class UsersService {
  constructor() {
    this.app = axios.create({
      baseURL: `http://localhost:5005/api/people`,
      withCredentials: true
    })
  }

  getAllUsers = (filter) => this.app.get("/allUsers", filter)

  getOneUser = (id) => this.app.get(`/profile/${id}`)

  editProfile = (id, newData) => this.app.post(`/profile/${id}/edit-profile`, newData)

  deleteProfile = (id, newData) => this.app.delete(`/delete-profile/${id}`, newData)
}

export default UsersService