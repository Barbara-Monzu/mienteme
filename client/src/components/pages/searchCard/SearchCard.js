import React, { useContext, useState, useEffect } from "react";

import './SearchCard.css'
import { UsersSelected } from "../index/AllRoutes";
import DatesService from "../../services/dates.service"
import { Link } from "react-router-dom"


const SearchCard = (props) => {


    return (
        <>
            <div className="search-container">
                <h4 className="searchCard-h4">Atrévete a explorar</h4>
                <p className="searchCard-subtitle">¿Cuál es tu vibra...?</p>

                <div className="searchCard-box-1">
                    <div className="searchCard-box-1-content">
                        <p className="searchCard-box-text">Gastronomía</p>
                        <Link to="categoria/GASTRONOMY">
                            <div className="search-card one">
                                <img className="searchCard-image-1" />
                            </div>
                        </Link>
                    </div>

                    <div className="searchCard-box-1-content">
                        <p className="searchCard-box-text">Cultura</p>
                        <Link to="categoria/CULTURE">
                            <div className="search-card one">
                                <img className="searchCard-image-2" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="searchCard-box-2">
                    <div className="searchCard-box-2-content">
                        <p className="searchCard-box-text">Naturaleza</p>
                        <Link to="categoria/NATURE">
                            <div className="search-card one">
                                <img className="searchCard-image-3" />
                            </div>
                        </Link>
                    </div>

                    <div className="searchCard-box-content">
                        <p className="searchCard-box-text">Random</p>
                        <Link to="categoria/RANDOM">
                            <div className="search-card one">
                                <img className="searchCard-image-4" />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="searchCard-box-3">
                    <div className="searchCard-box-content">
                        <p className="searchCard-box-text all">Todas</p>
                        <Link to="categoria/todas">
                            <div className="search-card one">
                                <img className="searchCard-image-5" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SearchCard