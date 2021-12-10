
import './FooterNav.css'
import React, { useContext } from 'react'
import UserContext from '../../services/UserContext'
import { Link, useHistory } from 'react-router-dom'
import AuthService from '../../services/auth.service'


const FooterNav = () => {

    const authService = new AuthService()
    const { loggedUser, storeUser } = useContext(UserContext)

    let history = useHistory()
  
    const logout = (e) => {
  
      e.preventDefault()
  
      authService
        .logout()
        .then(() => {
          storeUser(null)
          history.push(`/`)
        })
        .catch(err => console.error(err))
  
    }
    return(
        <div className="navbar-container">
            <Link className="link" to="/click-me">
                <img className="user" src="https://i.pinimg.com/originals/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" />
            </Link>
            <Link className="link" to="/segundas-oportunidades" >
                <img className="second-chance" src="https://www.pngkit.com/png/full/352-3520722_arrow-repeat-comments-repost-logo-png.png" />
            </Link>
            <Link to="/buscar" >
                <img className="search" src="https://www.freeiconspng.com/uploads/search-icon-png-1.png" />
            </Link>
            <Link className="link" to="/peticiones" >
                 <img className="request" src="https://static.thenounproject.com/png/2714894-200.png" />
            </Link>
            <Link className="link" to="/chat" >
                 <img className="chat" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Hg6hGfUj4MIiM1S40bv0k52vf5J59J_Acw&usqp=CAU" />
            </Link>
        </div>
    )
}
export default FooterNav