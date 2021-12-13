

import React, { Component, createContext, useContext, useState, useEffect } from "react";
import EditProfile from "../editProfile/EditProfile";
import UserCard from '../allUsers/userCard/UserCard'
import FooterNav from "../footerNav/FooterNav";
import { Form, Button, Modal, Container, Link } from 'react-bootstrap'
import PeopleService from "../../services/people.service";
import CheckFirstFormService from "../../services/checkFirstFormService.service";


import { UsersSelected } from "./AllRoutes";


const LoggedUserHome = () => {

    const { allUsers } = useContext(UsersSelected);
    const [newRandomUser, setNewRandomUser] = useState(undefined)
  

    console.log(" CONTEXTO de todos los usuarios: ", allUsers)

    useEffect(() => {
        randomUser()

    }, [])

    const randomUser = () => {
        const index = Math.floor(Math.random() * allUsers?.length)
        let [selectedUser] = allUsers?.splice(index, 1)
        console.log("esta es mi usuario random: ", selectedUser)
        setNewRandomUser(selectedUser)
    };

    return (
        <>
            <p>Se está renderizando LoggedUserHome</p>
            {/* <button onClick={() => randomUser()}>Next</button> */}
            {newRandomUser ? <UserCard user={newRandomUser} next={() => randomUser()} /> : (<h3>CARGANDO...</h3>)}

        </>
    )
}



export default LoggedUserHome