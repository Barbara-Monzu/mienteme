import React, { useContext, useState, useEffect } from "react";
import './SearchCard.css'
import { UsersSelected } from "../index/AllRoutes";
import DatesService from "../../services/dates.service"
import { Link } from "react-router-dom"
const SearchCard = (props) => {
    
const datesService = new DatesService()

const {allUsers} = useContext(UsersSelected);

// const[loading, setLoading] = useState(false)


    useEffect(() => {
    
      }, [])



    return (
        <>
        
       <h1 className="search-h1">CLICK-ME</h1>
        <div className="search-container">
            <div className="search-box">
            <Link to="/gastronomía" style={{margin: "10px"}}>
                    <div className="search-card one">
                        <p className="search-title">Compartamos el <br /> brunch </p>
                        <p className="search-subtitle">¿Con quién compartirías tu brunch?</p>
                        <p className="search-interest">Intereses</p>
                    </div> 
            </Link>
             

            <Link to="/cultura" style={{margin: "10px"}}>
                    <div className="search-card three">
                    <p className="search-title">Atrévete a compartir el arte</p>
                    <p className="search-subtitle">Encuentra con quien vivir el arte</p>
                    <p className="search-interest">Intereses</p>
                    </div>
                    </Link>

            </div>

            <div className="search-box">
            <Link to="/naturaleza" style={{margin: "10px"}}>
                    <div className="search-card two">
                        <p className="search-title">Aventúrate</p>
                        <p className="search-subtitle">Amantes de la naturaleza</p>
                        <p className="search-interest">Intereses</p>
                    </div>
                    </Link>

                    <Link to="/calendario" style={{margin: "10px"}}>
                    <div className="search-card four">
                        <p className="search-title">¿Libre esta <br /> noche?</p>
                        <p className="search-subtitle">Un plan aleatorio nunca está de más</p>
                        <p className="search-interest">Intereses</p>
                    </div>
                    </Link>
            </div>

                    
            <div className="search-box">
            <Link to="/random" style={{margin: "10px"}}>
                    <div className="search-card two">
                        <p className="search-title">Aventúrate</p>
                        <p className="search-subtitle">Amantes de la naturaleza</p>
                        <p className="search-interest">Intereses</p>
                    </div>
                    </Link>

                    <Link to="/otros" style={{margin: "10px"}}>
                    <div className="search-card four">
                        <p className="search-title">¿Libre esta <br /> noche?</p>
                        <p className="search-subtitle">Un plan aleatorio nunca está de más</p>
                        <p className="search-interest">Intereses</p>
                    </div>
                    </Link>
            </div>

                <div className="search-box">
            <Link to="/todas" style={{margin: "10px"}}>
                    <div className="search-card two">
                        <p className="search-title">Aventúrate</p>
                        <p className="search-subtitle">Amantes de la naturaleza</p>
                        <p className="search-interest">Intereses</p>
                    </div>
                    </Link>

    
            </div>
        </div>
   
      
        </>
    )
}

export default SearchCard