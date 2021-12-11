import React, { useContext, useHistory, useState } from 'react'
import AuthService from '../../services/auth.service'
import { Link } from 'react-router-dom'
// import EditProfile from '../editProfile/EditProfile'
import './SignupPage.css'
import UserContext from "../../services/UserContext"

const authService = new AuthService()

const SignupPage = (props) => {

  const [formData, setFormData] = useState({ email: '', pwd: '' })

  // let history = useHistory()
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
      
        this.props.history.push('/edit-profile')
        clearState()
      })
      .catch(err => err => console.error(err))
  }

  return (
    <>
      <div>
        <div className="project-logo-container">
          <div className="project-logo-box">
            <img className="project-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/521px-Love_Heart_symbol.svg.png" />
          </div>
          <div className="logo-container">
            <img className="exit-logo" src="https://sites.energycenter.org/sites/default/files/images/site/icons/xi.png" />
          </div>
        </div>
        <h2 className="signup">Regístrate</h2>

        <form onSubmit={handleSubmit}>

          <p className="signup">Al hacer clic en Inicia Sesión, aceptas nuestras <a className="signup" href="#">Condiciones</a>. Obtén más información sobre como procesamos tus datos en nuestra <a className="signup" href="#">Política de privacidad</a> y nuestra <a className="signup" href="#">Política de cookies</a></p>

          <div className="signup-form">
           
              <label></label>
              <input onChange={e => handleChange(e)} value={formData.email} name="email" type="text" placeholder="Correo electrónico" />
          

          
              <label></label>
              <input onChange={e => handleChange(e)} value={formData.pwd} name="pwd" type="password" placeholder="Contraseña" />
            
          </div>

          
          <div className="signup-box">
          
            <button className="signup" style={{cursor: "pointer"}}>
              Registrarme
            </button>


            <button className="signup-social">
              <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" />
              <p className="signup-text">
                Iniciar sesión con
                <br />
                Google
              </p>
            </button>

            <button className="signup-social">
              <img className="logo" src="https://1000marcas.net/wp-content/uploads/2019/11/Instagram-logo.png" />
              <p className="signup-text">
                Iniciar sesión con
                <br />
                Instagram
              </p>
            </button>

            <button className="signup-social">
              <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" />
              <p className="signup-text">
                Iniciar sesión con
                <br />
                Facebook
              </p>
            </button>
            <a className="link-footer" href="#">¿No consigues iniciar sesión?</a>
          </div>
          
        </form>
        


      </div>

    </>
  )
}


export default SignupPage