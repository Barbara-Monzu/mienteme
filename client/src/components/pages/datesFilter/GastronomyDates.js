import React, { useContext, useState, useEffect } from "react";
// import './GastronomyDates.css'
import { UsersSelected } from "../index/AllRoutes";
import DatesService from "../../services/dates.service"
import EachDate from "../../pages/date/EachDate"
import { Link } from "react-router-dom"

const datesService = new DatesService()

const GastronomyDates = () => {

    const { allUsers } = useContext(UsersSelected);

    // const[loading, setLoading] = useState(false)

    const [allGastronomyDates, setGastronomyDates] = useState([])
    const [filteredDates, setFilteredDates] = useState([])


    console.log(" CONTEXTO de todos los usuarios: ", allUsers)

    useEffect(() => {
        dates()



    }, [])


    const dates = () => {
        datesService.getGastronomyDates()
            .then(response => {
                console.log("ALL GASTRONOMY DATES ___>", response.data)
                setGastronomyDates(response.data)
                let arrDates = []
                for (let i = 0; i < allUsers?.length; i++) {
                    let dates = response.data.filter(elm => {
                        console.log(elm.creator, allUsers[i]._id, elm.creator === allUsers[i]._id);
                        return elm.creator === allUsers[i]._id
                    });
                    console.log(dates);
                    if (dates) dates.forEach(el => arrDates.push(el))
                }
                console.log("ARR DATES", arrDates)
                setFilteredDates(arrDates);
            })
            .then(() => console.log("MIRANDO EL SEGUNDO THEN", allGastronomyDates))
            .catch(err => console.log(err))
        console.log("ANTES DEL BUCLE GASTRONOMY ___>", allGastronomyDates)
        console.log("Miro CUantas citas de gastronomy finalmente pertenecen a mis USERS filtrados ___>", filteredDates)

    }

    return (
        <>

            <h1 className="search-h1">Citas Gastronómicas</h1>
            {filteredDates.map((elm, i) =>
                <EachDate {...elm}/>

            )}


        </>
    )
}

export default GastronomyDates