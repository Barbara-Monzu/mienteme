

import React, { Component, createContext, useContext, useState, useEffect } from "react";
import EditProfile from "../editProfile/EditProfile";
import UserCard from '../allUsers/userCard/UserCard'
import FooterNav from "../footerNav/FooterNav";
import { Form, Button, Modal, Container, Link } from 'react-bootstrap'
import PeopleService from "../../services/people.service";
import CheckFirstFormService from "../../services/checkFirstFormService.service";

import RequestService from "../../services/request.service";
import { UsersSelected } from "./AllRoutes";
import AuthService from '../../services/auth.service';


const MatchContext = React.createContext()


const LoggedUserHome = () => { 

    const allUsers = useContext(UsersSelected);

    console.log("este es mi contexto de todos los usuarios: ", allUsers)

    let newRandomUser;
    let copyUsersFiltered = allUsers;

    console.log("esta es mi copia de todos los usuarios: ", copyUsersFiltered)
    
    const [selectedUser, setSelectedUser] = useState(undefined)
    
    
    const randomUser = () => {
        const index = Math.floor(Math.random() * copyUsersFiltered.length)
        index && ([randomUser] = copyUsersFiltered?.splice(index, 1))
    }

    
    useEffect(() => {
        randomUser()
        setSelectedUser(newRandomUser)
      }, [copyUsersFiltered])
    
 
    // showForm = () => {
    //  serviceCheckForm.check()
    //   .then(response => {
    //     console.log(response.data)
    //     response.data.CheckFirstForm &&
    //    setState({ showForm: false }) })
    //   .catch(err => console.log(err))
    // }

 
        return (
            <>
                <p>Se está renderizando LoggedUserHome</p>

                {selectedUser ? <UserCard user={selectedUser} next={randomUser} /> : <p>Estamos mejorando la página, vuelve en unos minutos</p>}

            </>
        )
}



export default LoggedUserHome