import React, { useContext, useState, useEffect } from "react";
// import './SearchCard.css'
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
                        return elm.creator._id === allUsers[i]._id
                    });

                    if (dates) dates.forEach(el => arrDates.push(el))
                }
                console.log("ARR DATES", arrDates)
                setFilteredDates(arrDates);
            })
            .then(() => console.log("MIRANDO EL SEGUNDO THEN", allDates))
            .catch(err => console.log(err))

        console.log("FILTRADAS TODAS LAS CITAS ___>", allDates)

    }



    return (
        <>
            <Link to="/buscar" style={{ marginLeft: "100vh", textDecoration: "none"}}>
                <button className="search-title">VOLVER</button>
            </Link>

            <h1 className="search-h1">TODAS LAS CITAS</h1>
            {filteredDates?.map((elm, i) =>
                <EachDate key={i} {...elm} />

            )}


        </>
    )
}

export default AllDates