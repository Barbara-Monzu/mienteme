import './SecondsOpportunities.css'
import RequestService from "../../services/request.service";
import UserCard from '../allUsers/userCard/UserCard';
import { useEffect, useState } from "react";

const requestService = new RequestService()
let disableBtn = true;
let secondOpor = true;

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
                {randomUser ? (<UserCard user={randomUser.receiver} next={getRandomUser} disableBtn={disableBtn} secondOpor={secondOpor} />)
                    : <p className="secondsOp-text">Vuelve más tarde, ya has agotado todas tus segundas oportunidades</p>}

            </div>
        </>
    )
}

export default SecondOpportunity