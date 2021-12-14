import React, { useState, useEffect, useContext, createContext } from 'react'
import { UserProvider } from '../../services/UserContext'
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'
import LoggedUserHome from './LoggedUserHome';
import FormSignUp from "../../pages/signUp/FormSignUp"
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
import ByCategoryDates from "../datesFilter/ByCategoryDates";
import AllDates from "../datesFilter/AllDates";
import UserContext from '../../services/UserContext'
import ProfileMatch from "../../pages/allUsers/userCard/ProfileMatch"
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

      
            <HeaderNav />
            
            <UsersSelected.Provider value={{ allUsers }}>
            <Switch>

              <Route path="/click-me" exact render={() => <LoggedUserHome />} />
              <Route path="/formulario" exact render={() => <FormSignUp />} />
              <Route path="/chat" exact render={() => <Chat />} />
              <Route path="/chat/:idConver/:match" render={() => <PrivateChat />} />
              <Route path="/segundas-oportunidades" render={() => <SecondsOpportunities />} />
              <Route path="/buscar" render={() => <SearchCard />} />
              <Route path="/peticiones" render={() => <RequestPending />} />
              <Route path="/perfil" render={() => <UserProfile />} />
              <Route path="/editar-perfil" render={() => <EditProfile />} />
              <Route path="/todas" render={() => <AllDates />} />
              <Route path="/match/:id" render={() => <ProfileMatch />} />
              <Route path="/categoria/:category" render={() => <ByCategoryDates />} />
             
              {/* <Route path="/?ciudad=" render={() => <ByCity />} /> */}
              {/* <Route path="/calendario" render={() => <ByDayDates />} /> */}
             

            </Switch>
          </UsersSelected.Provider>

            <FooterNav />

      


      </main>

    </>
  )
}


export default AllRoutes;