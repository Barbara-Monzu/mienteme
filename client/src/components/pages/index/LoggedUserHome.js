

import React, { useContext, useState, useEffect } from "react";
import PeopleService from "../../services/people.service";
import EditProfile from "../editProfile/EditProfile";
import UserCard from '../allUsers/userCard/UserCard'
import { Link } from 'react-router-dom'


import { UsersSelected } from "./AllRoutes";


const LoggedUserHome = () => {

    const { allUsers } = useContext(UsersSelected);
    const [newRandomUser, setNewRandomUser] = useState(undefined)


    console.log(" CONTEXTO de todos los usuarios: ", allUsers)

    useEffect(() => {
        console.log('Holi')
        allUsers && randomUser()

    }, [allUsers])

    const randomUser = () => {
        const index = Math.floor(Math.random() * allUsers.length)
        let [selectedUser] = allUsers.splice(index, 1)
        console.log("esta es mi usuario random: ", selectedUser)
        setNewRandomUser(selectedUser)
    };

    return (
        <>
            {newRandomUser ? <UserCard user={newRandomUser} next={() => randomUser()} /> : (
                <div className="search-card color" style={{width: "100%", height: "100vh"}}>
                    
                <h3>Hazte <Link to="/https://www.youtube.com/watch?v=zIY87vU33aA&t=17s">PREMIUM</Link> para seguir viendo perfiles</h3>
                </div>
            )}

        </>
    )
}



export default LoggedUserHome