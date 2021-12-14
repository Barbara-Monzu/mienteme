import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import PeopleService from "../../../services/people.service"
import UserCard from "./UserCard"


const peopleService = new PeopleService()

const ProfileMatch = () => {

    const { id } = useParams()

    const [user, setUser] = useState([])
    console.log("ID DE BEGOÑA", id)


    useEffect(() => {
        getUser(id)
        // showDates()
    }, [])

    const getUser = (id) => {
        peopleService.getOneUser(id)
            .then(response => {
                setUser(response.data)
            })
            .catch(err => console.log("hay un error al conseguir las citas del otro en el front", err))
    }

    return (
        <>
            <p>Se está renderizando Profile Match</p>
            {user[0]?._id ? (<UserCard user={user[0]} />) : (<h3>CARGANDO...</h3>)}
        </>

    )

}


export default ProfileMatch