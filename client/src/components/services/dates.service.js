import axios from 'axios'

class DatesService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/dates`
    })
  }

  getAllDates = () => this.app.get("/allDates")
  createDates = (newDate) => this.app.post("/new", newDate)
}

export default DatesService