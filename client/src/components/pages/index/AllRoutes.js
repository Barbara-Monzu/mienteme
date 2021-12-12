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
import GastronomyDates from "../datesFilter/GastronomyDates";
import NatureDates from "../datesFilter/NatureDates";
import RandomDates from "../datesFilter/RandomDates";
import CultureDates from "../datesFilter/CultureDates";
import OthersDates from "../datesFilter/OthersDates";
import AllDates from "../datesFilter/AllDates";
import UserContext from '../../services/UserContext'
// import UserProfile from './pages/profile/userProfile';
export const UsersSelected = React.createContext();
const peopleService = new PeopleService()

const AllRoutes = () => {

  const { loggedUser } = useContext(UserContext)
  const [allUsers, setAllUsers] = useState(undefined)

  useEffect(() => {
    getAllUsers()
    
  }, [])

  const getAllUsers = () => {

    peopleService.getAllUsers()
      .then(response => {
        let users = response.data.filter(elm =>
          elm._id !== loggedUser._id)
          console.log("todos los usuarios menos yo", users)
          setAllUsers(users)
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
              <Route path="/gastronomía" render={() => <GastronomyDates />} />
              <Route path="/cultura" render={() => <CultureDates />} />
              <Route path="/random" render={() => <RandomDates />} />
              <Route path="/naturaleza" render={() => <NatureDates />} />
              <Route path="/otros" render={() => <OthersDates />} />
              <Route path="/todas" render={() => <AllDates />} />
              {/* <Route path="/calendario" render={() => <ByDayDates />} /> */}
             

            </Switch>
          </UsersSelected.Provider>

            <FooterNav />

        </Router>


      </main>

    </>
  )
}


export default AllRoutes;