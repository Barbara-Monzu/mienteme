import './SecondsOpportunities.css'
import RequestService from "../../services/request.service";
import UserCard from '../allUsers/userCard/UserCard';
import { useEffect, createContext, useState } from "react";

const requestService = new RequestService()


const SecondOpportunity = () => {

    let usersSecondsOpportunities;

    let [randomUser, setRandomUser] = useState();

    useEffect(() => {
        getSecondsOpportunities()
    }, [])

    const getSecondsOpportunities = () => {
        requestService.getAllSecondsOpportunities()
            .then(response => {
                usersSecondsOpportunities = response.data
                getRandomUser()
            })
            .catch(err => console.log(err))

    }


    const getRandomUser = () => {
        const index = Math.floor(Math.random() * usersSecondsOpportunities.length)
        index && ([randomUser] = usersSecondsOpportunities?.splice(index, 1))
        setRandomUser(randomUser);
    }


    return (
<>
        <p>Se está renderizando Segundas Oportunidades</p>

        <div className="second-card">
            {randomUser ? (<UserCard user={randomUser} next={getRandomUser} />) : <p>Aún no te han dado Segundas Oportunidades</p>}
    
        </div>
</>
    )
}

export default SecondOpportunity