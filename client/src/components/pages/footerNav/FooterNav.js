import React from 'react'
import './FooterNav.css'
import { Link } from "react-router-dom"
const FooterNav = () => {
    return(
        <div className="navbar-container">
            <Link className="link" to="/click-me">
                <a href="#" ><img className="user" src="https://i.pinimg.com/originals/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" /></a>
            </Link>
            <Link className="link" to="/segundas-oportunidades" >
                <a href="#"><img className="second-chance" src="https://www.pngkit.com/png/full/352-3520722_arrow-repeat-comments-repost-logo-png.png" /></a>
            </Link>
            <Link to="/buscar" >
                <a href="#"> <img className="search" src="https://www.freeiconspng.com/uploads/search-icon-png-1.png" /></a>
            </Link>
            <Link className="link" to="/peticiones" >
                <a href="#"> <img className="request" src="https://static.thenounproject.com/png/2714894-200.png" /></a>
            </Link>
            <Link className="link" to="/chat" >
                <a href="#"> <img className="chat" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Hg6hGfUj4MIiM1S40bv0k52vf5J59J_Acw&usqp=CAU" /></a>
            </Link>
        </div>
    )
}
export default FooterNav