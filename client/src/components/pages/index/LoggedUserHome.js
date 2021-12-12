

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

    const {allUsers} = useContext(UsersSelected);

    // const[loading, setLoading] = useState(false)
    const[copyAllUsers, setCopyAllUsers] = useState(undefined)
    const[newRandomUser, setNewRandomUser] = useState(undefined)
    const[index, setIndex] = useState(undefined)


    console.log(" CONTEXTO de todos los usuarios: ", allUsers)
  
        useEffect(() => {
                randomUser()
    
        
          }, [])
        
        const randomUser = async () => {
            const index = await Math.floor(Math.random() * allUsers?.length)
            console.log("ÍNDICE!!!!!", index)
            let [selectedUser] = await allUsers?.splice(index, 1)
            console.log("esta es mi usuario random: ", selectedUser)
            setNewRandomUser(selectedUser)
         
            
    }

 
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
                {/* <button onClick={() => randomUser()}>Next</button> */}
                {!newRandomUser ? (<h3>Si quieres seguir viendo perfiles HAZTE PREMIUM...</h3>)  : <UserCard user={newRandomUser} next={()=> randomUser()}/>}

            </>
        )
}



export default LoggedUserHome