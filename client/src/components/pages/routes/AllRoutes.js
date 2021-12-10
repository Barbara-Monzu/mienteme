import { Switch, Route, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import LoggedUserHome from '../index/LoggedUserHome';
import Chat from '../chatOnline/ChatOnline';
import PrivateChat from '../privateChat/PrivateChat';
import SearchCard from '../searchCard/SearchCard';
import RequestPending from '../requestPending/RequestPending'
import SecondsOpportunities from '../secondsOpportunities/SecondsOpportunities';


const RoutesLogged = () => {

    return (
        <>
        <React.StrictMode>
            <Switch>
    
                        <Route path="/click-me" exact render={() => <LoggedUserHome/>} />
                        <Route path="/chat" render={() => <Chat />} />
                        <Route path="/privatechat" render={() => <PrivateChat />} />
                        <Route path="/segundas-oportunidades" render={() => <SecondsOpportunities />} />
                        <Route path="/buscar" render={() => <SearchCard />} />
                        <Route path="/peticiones" render={() => <RequestPending />} />
                        <Route path="/perfil" render={() => <RequestPending />} />
                        {/* <Route path="/editar-perfil" render={() => <EditFormProfile />} />
                        <Route path="/editar-cita" render={() => <EditFormDate />} /> */}
             
            </Switch>
        </React.StrictMode>
        </>
    )

}

export default RoutesLogged