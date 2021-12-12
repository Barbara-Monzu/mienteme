import React, { useContext, useState, useEffect } from "react";
import './SearchCard.css'
import HeaderNav from '../headerNav/HeaderNav'
import FooterNav from '../footerNav/FooterNav'
import { UsersSelected } from "./AllRoutes";
import DatesService from "../../../services/dates.service"

const SearchCard = (props) => {
    
const datesService = new DatesService()

const {allUsers} = useContext(UsersSelected);

// const[loading, setLoading] = useState(false)
const[allDates, setAllDates] = useState(undefined)
const[gastronomyDates, setGastronomyDates] = useState(undefined)
const[filteredDates, setFilteredDates] = useState(undefined)


console.log(" CONTEXTO de todos los usuarios: ", allUsers)

    useEffect(() => {
        getDates()
        getGastronomyDates()
        // getCultureDates()
        // ggetNatureDates()
        // getRandomDates()
        // getOthersDates()
        // getByDay()

    
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

            
      const getGastronomyDates = async () => {
          const response = await datesService.getGastronomyDates()
            setGastronomyDates(response.data)
            let arrDates = []
            for(let i = 0; i <= allUsers.length; i++) {
                let [dates]  = gastronomyDates.filter( elm => elm.creator === allUsers[i]._id );
                arrDates.push(dates)
                console.log("BUCLE FOR de GASTRONOMY ___>", dates)
            }
            setGastronomyDates(arrDates);
            
        }






    return (
        <>
        
       <h1 className="search-h1">CLICK-ME</h1>
        <div className="search-container">
            <div className="search-box">
                <a href="#">
                    <div className="search-card one">
                        <p className="search-title">Compartamos el <br /> brunch </p>
                        <p className="search-subtitle">¿Con quién compartirías tu brunch?</p>
                        <p className="search-interest">Intereses</p>
                    </div> 
                </a>

                <a href="#">
                    <div className="search-card three">
                    <p className="search-title">Atrévete a compartir el arte</p>
                    <p className="search-subtitle">Encuentra con quien vivir el arte</p>
                    <p className="search-interest">Intereses</p>
                    </div>
                </a>

            </div>


            <div className="search-box">
                <a href="#">
                    <div className="search-card two">
                        <p className="search-title">Aventúrate</p>
                        <p className="search-subtitle">Amantes de la naturaleza</p>
                        <p className="search-interest">Intereses</p>
                    </div>
                </a>

                <a href="#">
                    <div className="search-card four">
                        <p className="search-title">¿Libre esta <br /> noche?</p>
                        <p className="search-subtitle">Un plan aleatorio nunca está de más</p>
                        <p className="search-interest">Intereses</p>
                    </div>
                </a>
            </div>
        </div>
        <div className="search-navbar">
            <p className="search-navbar-title">Buscar</p>
        <input className="search-input" type="text" />
        </div>
      
        </>
    )
}

export default SearchCard