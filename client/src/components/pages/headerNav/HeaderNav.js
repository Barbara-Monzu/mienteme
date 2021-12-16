import React, { useContext } from 'react'
import AuthService from '../../services/auth.service';
import UserContext from "../../services/UserContext";
import { Link, useHistory } from 'react-router-dom'
import './HeaderNav.css'

const authService = new AuthService()

const HeaderNav = () => {

  const { storeUser, loggedUser } = useContext(UserContext)

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


  return (
    <div className="headerNav-container">
      <Link to="/perfil">
        <img className="headerNav-profile-img" src={loggedUser.profileImages[0]} />
      </Link>

      <div className="headerNav-subcontainer">
        <img className="headerNav-project-img" src="https://cdn-icons-png.flaticon.com/512/3798/3798376.png" />
        <h1 className="headerNav-text">miénteme</h1>
      </div>
      <img className="headerNav-logout" onClick={logout} src="https://iconape.com/wp-content/files/ij/9415/png/01-16.png" />
    </div>


  )
}

export default HeaderNav