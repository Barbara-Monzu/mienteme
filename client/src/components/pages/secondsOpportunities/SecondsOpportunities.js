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
            <p>Te han dado una Segunda Oportunidad</p>

            <div className="second-card">
                {randomUser ? (<UserCard user={randomUser.receiver} next={getRandomUser} />) : <p>Vuelve más tarde</p>}

            </div>
        </>
    )
}

export default SecondOpportunity