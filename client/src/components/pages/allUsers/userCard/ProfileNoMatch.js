import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import PeopleService from "../../../services/people.service"
import UserCard from "./UserCard"

let disableBtn = true;

const peopleService = new PeopleService()

const ProfileNoMatch = () => {

    const { id } = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
        getUser(id)

    }, [])

    const getUser = (id) => {
        peopleService
            .getOneUser(id)
            .then(response => setUser(response.data))
            .catch(err => console.log("hay un error al conseguir las citas del otro en el front", err))
    }

    return (
        <>
            {user[0]?._id ? (<UserCard user={user[0]} disableBtn={disableBtn} />)
                : (<h3>Estamos mejorando la aplicación, vuelve en unos minutos</h3>)}
        </>
    )

}

export default ProfileNoMatch