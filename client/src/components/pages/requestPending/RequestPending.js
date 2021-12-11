import UserContext from '../../services/UserContext'
import React, { useState, useEffect, useContext } from 'react'
import './RequestPending.css'
import { Link } from "react-router-dom"
import RequestService from "../../services/request.service";
import UserCard from '../allUsers/userCard/UserCard';


const requestService = new RequestService()

const RequestPending = () => {

    // const { allUsers } = useContext(UserContext)

    let usersPendings;
    let [randomUser, setRandomUser] = useState();

useEffect(() => {
    getRequestPending()
  }, [])



const getRequestPending = () => {
    requestService.getAllRequestPending()
        .then(response => {
            usersPendings = response.data
            getRandomUser()
        })
        .catch(err => console.log(err))


}

const getRandomUser = () => {
    const index = Math.floor(Math.random() * usersPendings.length)
    index && ([randomUser] = usersPendings?.splice(index, 1))
    setRandomUser(randomUser)

}

    return (

        <div className="second-card">
        {randomUser ? (<UserCard user={randomUser} next={getRandomUser} />) : <p>No tienes Peticiones pendientes</p>}
               
        </div>
    )
}

export default RequestPending