import React, { useState, useEffect, } from 'react'
import './App.css';
import Home from './pages/index/Home';
import LoggedUserHome from './pages/index/LoggedUserHome';
import HeaderNav from './pages/headerNav/HeaderNav';
import { Switch, Route, Redirect } from 'react-router-dom'
import SignupPage from './pages/signUp/SignupPage';
import { UserProvider } from './services/UserContext'
import AuthService from '../../services/auth.service';
import PeopleService from "../../services/people.service";
// import UserProfile from './pages/profile/userProfile';

const authService = new AuthService()
const peopleService = new PeopleService()

const RoutesLogged = () => {

    const [allUsers, setAllUsers] = useState(undefined)
    let users;


  useEffect(() => {
    getAllUsers()
    setAllUsers(users)
  }, [users])

  const getAllUsers = () => {

    peopleService.getAllUsers()
        .then(response => {
             users = response.data.filter(elm => 
                elm._id !== this.props.loggedUser._id)
                console.log("todos los usuarios menos yo", users)
        })
        .catch(err => console.log(err))
}


    return (
      <>

        <main>
            <HeaderNav />
            
            <UserProvider value={{ allUsers }}>
                <Route path="/click-me" exact render={() => <LoggedUserHome logout={this.logout} loggedUser={this.state.loggedUser}/>} />
            </UserProvider>

            
      
        </main>

      </>
    )
}


export default RoutesLogged;