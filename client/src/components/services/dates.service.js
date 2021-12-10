import axios from 'axios'

class DatesService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/api/dates'
    })
  }

  createDate = (newData) => this.app.post('/new', newData)

  editDate = (idDate, newData) => this.app.post(`/edit-date/${idDate}`, newData)

  getOwnDates = (id) => this.app.get(`/mydates/${id}`)

  getUserDates = (idOtherUser) => this.app.get(`/its-dates/${idOtherUser}`)

  deleteDate = (idDate) => this.app.delete(`/delete/${idDate}`)

}

export default DatesService

