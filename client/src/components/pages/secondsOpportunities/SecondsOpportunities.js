import './SecondsOpportunities.css'
import RequestService from "../../services/request.service";
import UserCard from '../allUsers/userCard/UserCard';
import { useEffect, createContext, useState } from "react";

const requestService = new RequestService()


const SecondOpportunity = () => {



    let [randomUser, setRandomUser] = useState(undefined);
    let [secondsOpportunities, setSecondsOpportunities] = useState(undefined);

    useEffect(() => {
        getSecondsOpportunities()
    }, [])

    const getSecondsOpportunities = () => {
        requestService.getAllSecondsOpportunities()
            .then(response => {
                setSecondsOpportunities(response.data)
                const index = Math.floor(Math.random() * response.data.length)
                let [randomUser] = response.data?.splice(index, 1)
                setRandomUser(randomUser);
                getRandomUser()
            })
            .catch(err => console.log(err))

    }


    const getRandomUser = () => {
        const index = Math.floor(Math.random() * secondsOpportunities.length)
        let [randomUser] = secondsOpportunities?.splice(index, 1)
        setRandomUser(randomUser);
    }


    return (
        <>
            <div className="secondOp-container">
                {randomUser ? (<UserCard user={randomUser.receiver} next={getRandomUser} />) : <p className="secondsOp-text">Vuelve más tarde, ya has agotado todas tus segundas oportunidades</p>}

            </div>
        </>
    )
}

export default SecondOpportunity