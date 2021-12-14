import React, { useContext, useEffect, useState } from 'react'
import AuthService from '../../services/auth.service'
import { Link, useHistory } from 'react-router-dom'
import UserContext from "../../services/UserContext"

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

      <div className="project-logo-container">
        <div className="project-logo-box">
          <img className="project-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/521px-Love_Heart_symbol.svg.png" />
        </div>

      </div>
      <h2 className="signup">Inicia sesión</h2>

      <form onSubmit={handleSubmit}>

        <div className="signup-form">

          <label></label>
          <input onChange={e => handleChange(e)} value={formData.email} name="email" type="text" placeholder="Correo electrónico" />



          <label></label>
          <input onChange={e => handleChange(e)} value={formData.pwd} name="pwd" type="password" placeholder="Contraseña" />

        </div>


        <div className="signup-box">

          <button className="signup" style={{ cursor: "pointer" }} >
            Iniciar Sesión
          </button>



          <Link className="link-footer" to="/" > ¿Olvidaste tu contraseña?</Link>



        </div>



      </form>





    </div>


  )

}



export default LoginPage
