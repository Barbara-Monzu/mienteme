import React, { useContext, useEffect, useState } from 'react'
import AuthService from '../../services/auth.service'
import { Link, useHistory } from 'react-router-dom'
import UserContext from "../../services/UserContext"
import './LoginPage.css'
import PWAInstaller from '../../pwa/pwaInstaler'

const authService = new AuthService()

const LoginPage = props => {

  const [formData, setFormData] = useState({ email: '', pwd: '' })

  let history = useHistory()

  const { storeUser } = useContext(UserContext)

  useEffect(() => {
    return () => clearState();
  }, [])

  const clearState = () => {
    setFormData({ email: '', pwd: '' })
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const { email, pwd } = formData

    authService
      .login(email, pwd)
      .then(res => {
        storeUser(res.data)
        // clearState()
        history.push('/click-me')
      })
      .catch(err => console.error(err))
  }


  return (


    <div>
      <div className="login-header">
        <img className="login-img" src="https://cdn-icons-png.flaticon.com/512/3798/3798376.png" />
        <h1 className="login-h1">miénteme</h1>
      </div>

      <div className="login-container">
        <h2 className="login-h2">Inicia sesión</h2>

        <form onSubmit={handleSubmit}>
          <div className="login-inputs">
            <label></label>
            <input className="login-singleInput" onChange={e => handleChange(e)} value={formData.email} name="email" type="text" placeholder="Correo electrónico" />

            <label></label>
            <input className="login-singleInput" onChange={e => handleChange(e)} value={formData.pwd} name="pwd" type="password" placeholder="Contraseña" />
          </div>

          <div className="login-subcontainer">
            <button className="login-button">
              Iniciar sesión
            </button>
          </div>

        </form>
        HOLA
        <PWAInstaller />
      </div>
    </div>


  )

}



export default LoginPage
