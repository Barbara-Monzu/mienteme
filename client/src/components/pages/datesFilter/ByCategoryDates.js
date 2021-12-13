import React, { useContext, useState, useEffect } from "react";
// import './GastronomyDates.css'
import { UsersSelected } from "../index/AllRoutes";
import DatesService from "../../services/dates.service"
import EachDate from "../date/EachDate"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const datesService = new DatesService()

const ByCategoryDates = () => {

    const { category } = useParams()

    console.log("PARAMAS", category)

    const { allUsers } = useContext(UsersSelected);

    // const[loading, setLoading] = useState(false)

    const [allGastronomyDates, setGastronomyDates] = useState([])
    const [filteredDates, setFilteredDates] = useState([])


    console.log(" CONTEXTO filtrado de todos los usuarios: ", allUsers)

    useEffect(() => {
        getDates()


    }, [])


    const getDates = () => {
        datesService.getByCategory(category)
            .then(response => {
                console.log("ALL GASTRONOMY DATES ___>", response.data)
                setGastronomyDates(response.data)
                let arrDates = []
                for (let i = 0; i < allUsers?.length; i++) {
                    let dates = response.data.filter(elm => {
                        return elm.creator === allUsers[i]._id
                    });

                    if (dates) dates.forEach(el => arrDates.push(el))
                }
                console.log("ARR DATES", arrDates)
                setFilteredDates(arrDates);
            })
            .then(() => console.log("MIRANDO EL SEGUNDO THEN", allGastronomyDates))
            .catch(err => console.log(err))

        console.log("Miro CUantas citas de gastronomy finalmente pertenecen a mis USERS filtrados ___>", filteredDates)

    }

    return (
        <>

            <Link to="/buscar" style={{ marginLeft: "100vh", textDecoration: "none" }}>
                <button className="search-title">VOLVER</button>
            </Link>

            <h1 className="search-h1">Citas</h1>
            {filteredDates.map((elm, i) =>
                <EachDate {...elm} />

            )}


        </>
    )
}

export default ByCategoryDates