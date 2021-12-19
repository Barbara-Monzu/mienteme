import axios from 'axios'

class UsersService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/people`,
      withCredentials: true
    })
  }

  getAllUsers = () => this.app.get("/allUsers")

  getOneUser = (id) => this.app.get(`/profile/${id}`)

  editProfile = (id, newData) => this.app.post(`/profile/${id}/edit-profile`, newData)

  deleteProfile = (id, newData) => this.app.delete(`/delete-profile/${id}`, newData)
}

export default UsersService