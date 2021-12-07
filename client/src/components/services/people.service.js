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

  createDate = (id, newData) => this.app.post(`/profile/${id}/newDate`, newData)

  editProfile = (id, newData) => this.app.post(`/profile/${id}/edit-profile`, newData)

  editDate = (idDate, newData) => this.app.post(`/profile/edit-date/${idDate}`, newData)

  deleteDate = (idDate, newData) => this.app.delete(`/delete/${idDate}`, newData)
  
  deleteProfile = (id, newData) => this.app.delete(`/delete-profile/${id}`, newData)
}

export default UsersService