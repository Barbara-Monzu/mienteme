import React, { useState, useEffect, useContext, createContext } from 'react'
import { UserProvider } from '../../services/UserContext'
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'
import LoggedUserHome from './LoggedUserHome';
import Chat from '../chatOnline/ChatOnline';
import PrivateChat from '../privateChat/PrivateChat';
import SearchCard from '../searchCard/SearchCard';
import RequestPending from '../requestPending/RequestPending'
import SecondsOpportunities from '../secondsOpportunities/SecondsOpportunities';
import FooterNav from "../footerNav/FooterNav";
import HeaderNav from '../headerNav/HeaderNav';
import PeopleService from "../../services/people.service";
import UserProfile from "../userProfile/UserProfile";
import EditProfile from "../editProfile/EditProfile";
// import UserProfile from './pages/profile/userProfile';
export const UsersSelected = React.createContext();
const peopleService = new PeopleService()

const AllRoutes = () => {

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

        <Router>
            <HeaderNav />
            
            <UsersSelected.Provider value={{ allUsers }}>
            <Switch>

              <Route path="/click-me" exact render={() => <LoggedUserHome />} />
              <Route path="/chat" render={() => <Chat />} />
              <Route path="/privatechat" render={() => <PrivateChat />} />
              <Route path="/segundas-oportunidades" render={() => <SecondsOpportunities />} />
              <Route path="/buscar" render={() => <SearchCard />} />
              <Route path="/peticiones" render={() => <RequestPending />} />
              <Route path="/perfil" render={() => <UserProfile />} />
              <Route path="/editar-perfil" render={() => <EditProfile />} />
              {/* <Route path="/editar-cita" render={() => <EditFormDate />} /> */}

            </Switch>
          </UsersSelected.Provider>

            <FooterNav />

        </Router>


      </main>

    </>
  )
}


export default AllRoutes;