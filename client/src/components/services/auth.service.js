import axios from 'axios'

class AuthService {
  constructor() {
    this.app = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}`,
      withCredentials: true
    })
  }

  signup = (email, pwd) => this.app.post("/signup", { email, pwd })
  login = (email, pwd) => this.app.post("/login", { email, pwd })
  logout = () => this.app.get("/logout")
  isloggedin = () => this.app.get("/isloggedin")
}

export default AuthService