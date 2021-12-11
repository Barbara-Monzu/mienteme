import { useState, useEffect } from "react"
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'
import './App.css';
import AuthService from './services/auth.service';
import NoLoggedRoutes from "./pages/routes/NoLoggedRoutes"
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

      <main>


        <Router>
          <UserProvider value={{ loggedUser, storeUser, fetchUser }}>
            
            {loggedUser === null ?
             <NoLoggedRoutes />
            
            : (<AllRoutes />)}

          </UserProvider>

        </Router>

        {/* } */}

      </main>
    </>
  )
}


export default App;