import React, { useContext, useState, useEffect } from "react";
import './AllDates.css'
import { UsersSelected } from "../index/AllRoutes";
import DatesService from "../../services/dates.service"
import EachDate from "../date/EachDate"
import { Link } from "react-router-dom"

const datesService = new DatesService()

const AllDates = () => {


    const { allUsers } = useContext(UsersSelected);

    // const[loading, setLoading] = useState(false)
    const [allDates, setAllDates] = useState(undefined)
    const [filteredDates, setFilteredDates] = useState(undefined)


    console.log(" CONTEXTO de todos los usuarios: ", allUsers)

    useEffect(() => {
        getDates()



    }, [])


    const getDates = () => {
        datesService.getAllDates()
            .then(response => {
                console.log("ALL DATES ___>", response.data)
                setAllDates(response.data)
                let arrDates = []
                for (let i = 0; i < allUsers?.length; i++) {
                    let dates = response.data.filter(elm => {
                        return elm.creator?._id === allUsers[i]?._id
                    });

                    if (dates) dates.forEach(el => arrDates.push(el))
                }
                console.log("ARR DATES", arrDates)
                setFilteredDates(arrDates);
                console.log("FILTRADAS TODAS LAS CITAS ___>", filteredDates)
            })
            .catch(err => console.log(err))


    }



    return (

        <>
            <div className="all-dates-container">
                <Link to="/buscar" className="volver-button">VOLVER</Link>

                <h1 className="">TODAS LAS CITAS</h1>
                {filteredDates?.map((elm, i) =>
                    <EachDate key={i} {...elm} />

                )}

            </div>
        </>

    )
}

export default AllDates