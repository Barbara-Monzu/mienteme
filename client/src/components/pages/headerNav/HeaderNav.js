import React, { useContext } from 'react'
import AuthService from '../../services/auth.service';
import UserContext from "../../services/UserContext";
import { Link, useHistory} from 'react-router-dom'
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
    <div className="header-nav">

      <Link to="/perfil" style={{ margin: "10px" }}>
        <img className="header-profile-pic" src={loggedUser.profileImages[0]} />
      </Link>

      <h1 className="header-nav-h1">CLICK-ME</h1>
      <img className="logout" style={{ cursor: "pointer" }} onClick={logout} src="https://iconape.com/wp-content/files/ij/9415/png/01-16.png" />


    </div>

  )
}

export default HeaderNav