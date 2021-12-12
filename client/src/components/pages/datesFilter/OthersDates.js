import React, { useContext, useState, useEffect } from "react";
// import './GetOtherDates.css'
import { UsersSelected } from "../index/AllRoutes";
import DatesService from "../../services/dates.service"
import { Link } from "react-router-dom"

const datesService = new DatesService()

const OtherDates = () => {
    
const {allUsers} = useContext(UsersSelected);

// const[loading, setLoading] = useState(false)

const[allOtherDates, setOtherDates] = useState(undefined)
const[filteredDates, setFilteredDates] = useState(undefined)


console.log(" CONTEXTO de todos los usuarios: ", allUsers)

    useEffect(() => {
        dates()
    
    
      }, [])


      const dates = async () => {
          datesService.getOtherDates()
          .then(response => {
            console.log("ALL GASTRONOMY DATES ___>", allOtherDates)
            setOtherDates(response.data)})
          .catch(err => console.log(err))
          console.log("ANTES DEL BUCLE GASTRONOMY ___>", allOtherDates)
            let arrDates = []
          for(let i = 0; i <= allUsers?.length; i++) {
                let [dates]  = allOtherDates?.filter( elm => elm.creator === allUsers[i]._id );
                arrDates.push(dates)
            }
            setFilteredDates(arrDates);
            console.log("Miro CUantas citas de gastronomy finalmente pertenecen a mis USERS filtrados ___>", filteredDates)
            
        }

    return (
        <>
        
       <h1 className="search-h1">Citas Gastronómicas</h1>
        {filteredDates?.map((elm, i) => {
            <p>Haciendo pruebas</p>
        {/* <EachDate {...elm}> */}

        })}

      
        </>
    )
}

export default OtherDates