import React, { useContext, useState } from 'react'
import AuthService from '../../services/auth.service'
import { useHistory, Link } from 'react-router-dom'
// import EditProfile from '../editProfile/EditProfile'
import './SignupPage.css'
import UserContext from "../../services/UserContext"

const authService = new AuthService()

const SignupPage = (props) => {

  const [formData, setFormData] = useState({ email: '', pwd: '' })

  let history = useHistory()
  const { storeUser } = useContext(UserContext)

  const clearState = () => {
    setFormData({ email: '', pwd: '' })
  }

  const handleChange = e => {
    const { value, name } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {

    e.preventDefault()

    const { email, pwd } = formData

    authService
      .signup(email, pwd)
      .then(res => {
        storeUser(res.data)

        history.push('/formulario')
        clearState()
      })
      .catch(err => err => console.error(err))
  }

  return (
    <>
      <div>
        <div className="signup-header">
          <img className="signup-img" src="https://cdn-icons-png.flaticon.com/512/3798/3798376.png" />
          <h1 className="signup-h1">miénteme</h1>
        </div>

        <div className="signup-container">
          <h2 className="signup-h2">Regístrate</h2>

          <form onSubmit={handleSubmit}>
            <p className="signup-subtitle">Al hacer clic en Inicia Sesión, aceptas nuestras <a className="signup-a" href="#">Condiciones</a>. Obtén más información sobre como procesamos tus datos en nuestra <a className="signup-a" href="#">Política de privacidad</a> y nuestra <a className="signup-a" href="#">Política de cookies</a></p>

            <div className="signup-inputs">
              <label></label>
              <input className="signup-singleInput" onChange={e => handleChange(e)} value={formData.email} name="email" type="text" placeholder="Correo electrónico" />

              <label></label>
              <input className="signup-singleInput" onChange={e => handleChange(e)} value={formData.pwd} name="pwd" type="password" placeholder="Contraseña" />
            </div>

            <div className="signup-subcontainer">
              <button className="signup-button">Registrarme</button>
            </div>

            <Link className="signup-link-footer" to="/login">¿Ya tienes una cuenta?</Link>
          </form>
        </div>
      </div>







    </>
  )
}


export default SignupPage