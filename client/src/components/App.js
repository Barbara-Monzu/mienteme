
import './App.css';
import Home from './pages/index/Home';
import LoggedUserHome from './pages/index/LoggedUserHome';
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// import Footer from './layout/Footer/Footer'
// import Navbar from './layout/Navigation/Navbar'
import SignupPage from './pages/signup/SignupPage';
import LoginPage from './pages/login/LoginPage';
import AllUsers from './pages/allUsers/AllUsers';
import ChatOnline from './pages/chatOnline/ChatOnline';
import PrivateChat from './pages/privateChat/PrivateChat';
import AuthService from './services/auth.service';
import { UserProvider } from './services/UserContext'
// import UserProfile from './pages/profile/userProfile';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedUser: undefined
    }
    
    this.authService = new AuthService()
  }

  componentDidMount() {
    this.authService.isloggedin()
      .then(response => this.storeUser(response.data))
      .catch(err => this.storeUser(null))
  }

  storeUser = (user) => {
    this.setState({ loggedUser: user })
  }

  logout = () => {
    this.authService.logout()
      .then(response => {
        this.storeUser(null)
        this.props.history.push("/")})
      .catch(err => console.log(err))
  }


  render() {
    return (
      <>

        <main>
          <Switch>
            {this.state.loggedUser ? 

              <>
              <Redirect to="/click-me" />
              <UserProvider loggedUser={this.state.loggedUser} logout={this.logout}>
              {/* El logged User solo se lo pasamos a la navbar que va a contener el botón 
                para sacar el logged user, llamar a useContext y const { loggedUser } = useContext(UserContext)*/}
              {/* Aquí debería estar solo la Home y en la Home el componente de allUsers y la Nav Bar. En la Nav sacar el logout del contexto global */}
                <Route path="/click-me" exact render={() => <LoggedUserHome logout={this.logout}/>} />
                <Route path="/allUsers" exact render={() => <AllUsers />} />
                <Route path="/chat" render={() => <ChatOnline />} />
                <Route path="/privatechat" render={() => <PrivateChat />} />
              </UserProvider>
  
              </>
              :
              <>
                <Route path="/" exact render={() => <Home />} />
                <Route path="/singup" render={(props) => <SignupPage {...props} storeUser={this.storeUser} />} />
                <Route path="/login" render={(props) => <LoginPage {...props} storeUser={this.storeUser} />} />
              </>
            }
      
          </Switch>
        </main>

      </>
    )
  }
}

export default App;