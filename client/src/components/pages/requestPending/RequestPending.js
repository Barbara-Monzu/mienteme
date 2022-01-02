import React, { useState, useEffect, useContext } from 'react'
import './RequestPending.css'
import { Link } from "react-router-dom"
import RequestService from "../../services/request.service";
import UserCard from '../allUsers/userCard/UserCard';

const requestService = new RequestService()
let disableBtn = true;


const RequestPending = () => {

    const [randomUser, setRandomUser] = useState(undefined);
    const [pendings, setPendings] = useState(undefined);

    useEffect(() => {
        getRequestPending()
    }, [])

    const getRequestPending = () => {
        requestService
            .getAllRequestPending()
            .then(response => {
                const index = Math.floor(Math.random() * response.data?.length)
                let [randomUser] = response.data?.splice(index, 1)
                setRandomUser(randomUser)
                setPendings(response.data)
            })
            .catch(err => console.log(err))

    }

    const getRandomUser = () => {
        const index = Math.floor(Math.random() * pendings?.length)
        let [randomUser] = pendings?.splice(index, 1)
        setRandomUser(randomUser)

    }

    return (
        <>

            <div className="request-container">
                <div className="second-card">
                    {randomUser ? (<UserCard user={randomUser.creator} dateSelected={randomUser.dateSelected} request={randomUser} next={getRandomUser} disableBtn={disableBtn}/>)
                        : <p className="request-subtitle">No tienes solicitudes pendientes</p>}
                </div>
            </div>
        </>
    )
}

export default RequestPending