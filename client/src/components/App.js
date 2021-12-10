import { useState, useEffect } from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import AuthService from './services/auth.service';
import LoggedRoutes from "./pages/routes/LoggedRoutes"
import NoLoggedRoutes from "./pages/routes/NoLoggedRoutes"
import { UserProvider } from './services/UserContext'
// import UserProfile from './pages/profile/userProfile';

const authService = new AuthService()

const App = props => {
  
  const [loggedUser, setLoggedUser] = useState(undefined)

  const storeUser = user => setLoggedUser(user)

  const fetchUser = () => {
    authService.isloggedin()
      .then(res => storeUser(res.data))
      .catch(err => storeUser(null))
  }

  useEffect(() => {
    fetchUser()
  }, [])


  return (
    <>
    
    <main>

        {loggedUser !== undefined ?

          <UserProvider value={{ loggedUser, storeUser, fetchUser }}>
            <LoggedRoutes />
          </UserProvider>

          :

          <NoLoggedRoutes />
         
        }
      
        </main>
    </>
  )
}


export default App;