import axios from 'axios'

class DatesService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/api/dates'
    })
  }

  getAllDates = () => this.app.get(`/`)

  createDate = (newData, id) => this.app.post(`/new/${id}`, newData)

  editDate = (idDate, newData) => this.app.post(`/edit-date/${idDate}`, newData)

  getOwnDates = (id) => this.app.get(`/mydates/${id}`)

  getUserDates = (idOtherUser) => this.app.get(`/its-dates/${idOtherUser}`)

  getByCategory = (category) => this.app.get(`/categoria/${category}`)

  getByDay = (day) => this.app.get(`/byday-dates`, day)

  deleteDate = (idDate) => this.app.delete(`/delete/${idDate}`)

}

export default DatesService

