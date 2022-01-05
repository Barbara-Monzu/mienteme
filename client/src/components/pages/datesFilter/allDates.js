import React, { useContext, useState, useEffect } from "react";
import './AllDates.css'
import { UsersSelected } from "../index/AllRoutes";
import DatesService from "../../services/dates.service"
import EachDate from "../date/EachDate"
import { Link } from "react-router-dom"

const datesService = new DatesService()

const AllDates = () => {

    const { usersFiltered } = useContext(UsersSelected);
    const [filteredDates, setFilteredDates] = useState(undefined)

    useEffect(() => {
        getDates()

    }, [])


    const getDates = () => {
        datesService
            .getAllDates()
            .then(response => {
                console.log("ALL DATES ___>", response.data)
                let arrDates = []
                for (let i = 0; i < usersFiltered?.length; i++) {
                    let dates = response.data.filter(elm => {
                        return elm.creator?._id === usersFiltered[i]?._id
                    });

                    if (dates) dates.forEach(el => arrDates.push(el))
                }
                setFilteredDates(arrDates);
            })
            .catch(err => console.log(err))  
            console.log("FILTRADAS TODAS LAS CITAS ___>", filteredDates)
    }

    return (

        <div className="all-dates-container">
            <Link to="/buscar" className="volver-button">VOLVER</Link>
            <h1 className="">TODAS LAS CITAS</h1>
            {filteredDates?.map((elm, i) => <EachDate key={i} {...elm} />)}
        </div>
    )
}

export default AllDates