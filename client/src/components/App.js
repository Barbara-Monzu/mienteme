import { useState, useEffect } from "react"
import AuthService from './services/auth.service';
import NoLoggedRoutes from "./pages/index/NoLoggedRoutes"
import { UserProvider } from './services/UserContext'
import AllRoutes from "./pages/index/AllRoutes";

const authService = new AuthService()

const App = () => {

  const [loggedUser, setLoggedUser] = useState(null)
  
  const storeUser = user => setLoggedUser(user)

  const fetchUser = () => {
    authService.isloggedin()
      .then(res => storeUser(res.data))
      .catch(err => storeUser(null))
  }

  useEffect(() => {

    fetchUser()
  }, [])

  console.log("Usuario logueado _____>>>>>", loggedUser)

  return (
    <>
      <UserProvider value={{ loggedUser, storeUser, fetchUser }}>
        {loggedUser === null ? <NoLoggedRoutes /> : (<AllRoutes />)}
      </UserProvider>
    </>
  )
}


export default App;