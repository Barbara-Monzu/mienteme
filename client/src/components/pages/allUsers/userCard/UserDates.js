import React, { useState, useEffect } from "react";
import DatesService from "../../../services/dates.service"
import './UserCard.css'

const datesService = new DatesService()

const UserDates = (props) => {

    const [dates, setDates] = useState([])

    useEffect(() => {
        showDates()

    }, [props.user])

    const showDates = () => {
        datesService
            .getUserDates(props.user._id)
            .then(response => {
                setDates(response.data)
            })
            .catch(err => console.log("hay un error al conseguir las citas del otro en el front", err))
    }


    return (
        <>
            <div className="userCard-dates-home">
            {props.secondOpor ? <p className="userCard-date-title">{props.user.username} te ha dado una segunda oportunidad</p>
            : <p className="userCard-date-title">Citas de {props.user.username}</p>}
                <p className="userCard-date-title">{props.user.city}</p>
            </div>

            <div className="userCard-detail-date-home">
                {dates?.map((elm, i) => (
                    <div key={i}>
                        <div onClick={() => props.chooseDate(elm)} className="userCard-detail-date">
                            <p className="userCard-detail-date-name">{elm.nameDate}</p>
                            <p className="userCard-detail-date-description">{elm.description}</p>
                            <div className="userCard-detail-date-category-content">
                                <p className="userCard-detail-date-category">{elm.category}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default UserDates
