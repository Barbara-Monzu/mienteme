import React, { useState, useEffect, useContext, createContext } from 'react'
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
import ConversationService from "../../services/conversation.service";
import RequestService from "../../services/request.service";
import MyCalendar from "../../pages/calendar/Calendar"
import "./General.css"

export const UsersSelected = React.createContext();
const peopleService = new PeopleService()
const serviceConversation = new ConversationService()
const requestService = new RequestService()

const AllRoutes = () => {

  const { loggedUser } = useContext(UserContext)
  const [allUsers, setAllUsers] = useState(undefined)
  const [removingConvers, setRemovingConvers] = useState(undefined)
  const [secondsOpportunities, setSecondsOpportunities] = useState(undefined);
  const [usersFiltered, setUsersFilter] = useState(undefined);

  useEffect(() => {
    getAllUsers()

  }, [loggedUser.filter])

  useEffect(() => {
    allUsers && conversations()

  }, [allUsers]);

  useEffect(() => {
    removingConvers && requestsReceived()

  }, [removingConvers])


  useEffect(() => {
    secondsOpportunities && resquestCreatedForMe()

  }, [secondsOpportunities])

  const getAllUsers = () => {

    peopleService.getAllUsers()
      .then(response => {
        let users = response.data.filter(elm =>
          elm._id !== loggedUser._id)
        console.log("TODOS MENOS YO", users)
        setAllUsers(users)
      })
      .catch(err => console.log(err))
  }

  const conversations = () => {
    serviceConversation
      .getAllConversations()
      .then(response => {
        let usersChat = response.data.map(elm =>
          elm.members.filter(user => user._id !== loggedUser._id)[0])
        let removing = allUsers?.filter(elm =>
          !usersChat.some(user => user._id === elm._id))

        console.log("QUITO MIS CONVERS", removing)
        setRemovingConvers(removing)
      })
      .catch(error => console.log(error))
  }


  const requestsReceived = () => {
    requestService
      .getAllRequestPending()
      .then(response => {
        let usersSecondOpportunities = response.data.map(elm => elm.creator)
        let removing = removingConvers?.filter(elm =>
          !usersSecondOpportunities.some(userReq => userReq._id === elm._id))
        console.log("QUITO LAS REQUEST PENDING QUE RECIBO", removing)
        setSecondsOpportunities(removing)

      })
      .catch(err => console.log(err))

  }


  const resquestCreatedForMe = () => {
    requestService
      .getRequestCreatedForMe()
      .then(response => {
        let receivers = response.data.map(elm => elm.receiver)
        let removing = secondsOpportunities?.filter(elm =>
          !receivers.some(user => user._id === elm._id))
        console.log("QUITO ADEMÁS LAS REQUEST CREADAS POR MI, A LA ESPERA DE SER CONTESTADAS", removing)
        setUsersFilter(removing)
      })
      .catch(err => console.log(err))
  }

  console.log("PRIMER CONTEXTO", usersFiltered)

  return (
    <main>
      <div className="general-header">
        <HeaderNav />
      </div>
      <div className="general-routes">
        <UsersSelected.Provider value={{ usersFiltered }}>
          <Switch>
            <Route path="/" exact render={() => <Redirect to="/click-me" />} />
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
            <Route path="/calendario" render={() => <MyCalendar />} />
            <Route path="/categoria/:category" render={() => <ByCategoryDates />} />
          </Switch>
        </UsersSelected.Provider>
      </div>
      <div className="general-footer">
        <FooterNav />
      </div>
    </main>
  )
}


export default AllRoutes;