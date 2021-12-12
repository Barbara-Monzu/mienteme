import React, { useContext, useState, useEffect } from "react";
// import './GetRandomDates.css'
import { UsersSelected } from "../index/AllRoutes";
import DatesService from "../../services/dates.service"
import { Link } from "react-router-dom"

const datesService = new DatesService()

const RandomDates = () => {
    
const {allUsers} = useContext(UsersSelected);

// const[loading, setLoading] = useState(false)

const[allRandomDates, setRandomDates] = useState(undefined)
const[filteredDates, setFilteredDates] = useState(undefined)


console.log(" CONTEXTO de todos los usuarios: ", allUsers)

    useEffect(() => {
        dates()
    
    
      }, [])


      const dates = async () => {
          datesService.getRandomDates()
          .then(response => {
            console.log("ALL GASTRONOMY DATES ___>", allRandomDates)
            setRandomDates(response.data)})
          .catch(err => console.log(err))
          console.log("ANTES DEL BUCLE GASTRONOMY ___>", allRandomDates)
            let arrDates = []
          for(let i = 0; i <= allUsers?.length; i++) {
                let [dates]  = allRandomDates?.filter( elm => elm.creator === allUsers[i]._id );
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

export default RandomDates