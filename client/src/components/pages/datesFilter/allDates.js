import React, { useContext, useState, useEffect } from "react";
import './SearchCard.css'
import { UsersSelected } from "../index/AllRoutes";
import DatesService from "../../services/dates.service"
import { Link } from "react-router-dom"

const datesService = new DatesService()

const AllDates = (props) => {
    

const {allUsers} = useContext(UsersSelected);

// const[loading, setLoading] = useState(false)
const[allDates, setAllDates] = useState(undefined)
const[filteredDates, setFilteredDates] = useState(undefined)


console.log(" CONTEXTO de todos los usuarios: ", allUsers)

    useEffect(() => {
        getDates()
      

    
      }, [])


      const getDates = async () => {
          const response = await datesService.getAllDates()
              console.log("estoy mirando todas las citas en SEARCH CARD ==>", response.data)
              setAllDates(response.data)
              console.log("allDates Despues del SETallDATES", allDates)
          const filter = await getFilteredDates()   
        
        }

        const getFilteredDates = () => {
            let arrDates = []
              for(let i = 0; i <= allUsers.length; i++) {
                  let [ dates ] = allDates.filter( elm => elm.creator === allUsers[i]._id )
                  arrDates.push(dates)
                  console.log("BUCLE FOR de TODAS LAS CITAS ____> estas son las citas de un user", dates)
              }
              setFilteredDates(arrDates);
        
            }



    return (
        <>
        
       <h1 className="search-h1">TODAS LAS CITAS</h1>
       {filteredDates?.map((elm, i) => {
        {/* <EachDate {...elm}> */}

        })}
        </>
    )
}

export default AllDates