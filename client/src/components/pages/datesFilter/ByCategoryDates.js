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

    const [allDates, setAllDates] = useState([])
    const [filteredDates, setFilteredDates] = useState([])

    //alldates no se usa

    console.log(" CONTEXTO filtrado de todos los usuarios: ", allUsers)

    useEffect(() => {
        getDates()


    }, [])


    const getDates = () => {
        datesService.getByCategory(category)
            .then(response => {
                console.log("ALL DATES BY CATEGORY___>", response.data)
                setAllDates(response.data)
                let arrDates = []
                for (let i = 0; i < allUsers?.length; i++) {
                    let dates = response.data.filter(elm => elm.creator?._id === allUsers[i]?._id);
                    if (dates) dates.forEach(el => arrDates.push(el))
                }
                console.log("ARR DATES", arrDates)
                setFilteredDates(arrDates);
            })
            .catch(err => console.log(err))

        console.log("DATES BY CATEGORY", filteredDates)

    }

    return (
        <>

            <Link to="/buscar" style={{ marginLeft: "100vh", textDecoration: "none" }}>
                <button className="search-title">VOLVER</button>
            </Link>

            <h1 className="search-h1">Citas</h1>

            {filteredDates?.map((elm, i) =>
                <EachDate {...elm} />

            )}


        </>
    )
}

export default ByCategoryDates