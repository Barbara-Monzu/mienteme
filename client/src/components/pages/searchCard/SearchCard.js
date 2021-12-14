import React, { useContext, useState, useEffect } from "react";

import './SearchCard.css'
import { UsersSelected } from "../index/AllRoutes";
import DatesService from "../../services/dates.service"
import { Link } from "react-router-dom"


const SearchCard = (props) => {


    return (
        <>

            <h1 className="search-h1">CLICK-ME</h1>
            <div className="search-container">
                <div className="search-box">
                    <Link to="categoría/GASTRONOMY" style={{ margin: "10px" }}>
                        <div className="search-card one">
                            <p className="search-title">GASTRONOMÍA<br /> brunch </p>

                        </div>
                    </Link>


                    <Link to="categoría/CULTURE" style={{ margin: "10px" }}>
                        <div className="search-card three">
                            <p className="search-title">CULTURA</p>

                        </div>
                    </Link>

                </div>

                <div className="search-box">
                    <Link to="categoría/NATURE" style={{ margin: "10px" }}>
                        <div className="search-card two">
                            <p className="search-title">NATURALEZA</p>

                        </div>
                    </Link>

                    <Link to="categoría/calendario" style={{ margin: "10px" }}>
                        <div className="search-card four">
                            <p className="search-title">ELIGE EL DÍA DE LA SEMANA</p>

                        </div>
                    </Link>
                </div>

                <Link to="/ciudad" style={{ margin: "10px" }}>
                        <div className="search-card four">
                            <p className="search-title">ELIGE EL DÍA DE LA SEMANA</p>

                        </div>
                    </Link>

                <div className="search-box">
                    <Link to="categoría/RANDOM" style={{ margin: "10px" }}>
                        <div className="search-card two">
                            <p className="search-title">RANDOM</p>

                        </div>
                    </Link>

                    <Link to="categoría/todas" style={{ margin: "10px" }}>
                        <div className="search-card two">
                            <p className="search-title">TODAS</p>

                        </div>
                    </Link>
                </div>


            </div>


        </>
    )
}

export default SearchCard