
import React, { Component, createContext } from "react";
import CreateUser from "../createUser/CreateUser";
import UserCard from '../allUsers/userCard/UserCard'
import FooterNav from "../footerNav/FooterNav";
import { Form, Button, Modal, Container, Link } from 'react-bootstrap'
// import RequestPending from "../../requestPending/RequestPending";

// import PeopleService from "../../services/people.service";
// import CheckFirstFormService from "../../services/checkFirstFormService.service";
// import RequestService from "../../services/request.service";




const  LoggedUserHome = (props) => {

const visualPage = {
  display: "flex", 
  flexDirection: "column", 
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  alignContent: "center",
  position: "absolute", 
  width: "100%",
  top: "200px",
  backgroundBlendMode: "lighten"

}


  return (
    <>

        
    
          <Modal>
          <Modal.Header closeButton>
            <Modal.Title>Crea tu usuario</Modal.Title>
          </Modal.Header>

          <Modal.Body>

          <CreateUser />

          </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={() => setModal(!modal)} variant="primary" type="submit">
                  Crea tu primer cita
                </Button>
            </Modal.Footer> */}
        </Modal>
              
          <UserCard />

          <FooterNav />  

          {/* <Conversations />

          <UsersRequestPendingCard />
          <SearchCard />
          <ProfileCard />
          <UsersSecondOpportunitiesCard /> */}
          

        {/* <UserProfile refreshUsers={this.refreshUsers} people={this.state.people} /> */}
     
    </>
  )
}

export default LoggedUserHome