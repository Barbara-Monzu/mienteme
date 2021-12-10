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
  
  getGastronomyDates = () => this.app.get(`/gastronomy-dates`)

  getCultureDates = () => this.app.get(`/culture-dates`)

  getNatureDates = () => this.app.get(`/nature-dates`)

  getRandomDates = () => this.app.get(`/random-dates`)

  getOthersDates = () => this.app.get(`/others-dates` )

  getByDay = (day) => this.app.get(`/byday-dates`, day)
  
  deleteDate = (idDate) => this.app.delete(`/delete/${idDate}`)

}

export default DatesService

