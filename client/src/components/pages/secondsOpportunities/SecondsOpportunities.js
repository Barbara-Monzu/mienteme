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
        [randomUser] = usersSecondsOpportunities?.splice(index, 1);
        setRandomUser(randomUser);
    }


    return (
        <div className="second-card">
            {randomUser ? (<UserCard {...randomUser} next={getRandomUser} />) : null}
            <button onClick={this.logout()}>Log out</button>
        </div>
    )
}

export default SecondOpportunity