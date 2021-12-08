import React, { Component } from 'react'
// import { Container, form, Button, Row, Col } from 'react-bootstrap'
import AuthService from '../../services/auth.service'
import CreateUser from '../createUser/CreateUser'
import { Modal, Form, Button  } from 'react-bootstrap';
import './SignupPage.css'

class SignupPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      pwd: ""
    }

    this.authService = new AuthService()
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.authService.signup(this.state.email, this.state.pwd)
      .then(response => {
        this.props.storeUser(response.data)
      })
      .catch(err => console.log(err.response.data.message))
  }

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget

    this.setState({ [name]: value })
  }

  



  render() {
    return (
          <div>
            <div className="project-logo-container">
              <div class="project-logo-box">
              <img className="project-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/521px-Love_Heart_symbol.svg.png"/>
              </div>
            <div className = "logo-container"> 
            <img className="exit-logo" src="https://sites.energycenter.org/sites/default/files/images/site/icons/xi.png" />
            </div>
            </div>
            <h2 className="signup">Regístrate</h2>
            <form onSubmit={this.handleSubmit}>

              <p className="signup">Al hacer clic en Inicia Sesión, aceptas nuestras <a className="signup" href="#">Condiciones</a>. Obtén más información sobre como procesamos tus datos en nuestra <a className="signup" href="#">Política de privacidad</a> y nuestra <a className="signup" href="#">Política de cookies</a></p>

            <div class="signup-form">
              <form>
                <label></label>
                <input onChange={this.handleInputChange} value={this.state.email} name="email" type="text" placeholder="Correo electrónico" />
              </form>

              <form>
                <label></label>
                <input onChange={this.handleInputChange} value={this.state.pwd} name="pwd" type="password" placeholder="Contraseña" />
              </form>
            </div>

            <div class="signup-box">
              <button className="signup">
                Registrarme
              </button>

              {/* <Link to="/userDetails" style={{margin: "10px"}}>
                <Button variant="dark" size="lg">Crea tu cita</Button>
              </Link> */}

              <button className="signup-social">
               <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"/>
                <p className="signup-text">
                Iniciar sesión con 
               <br />
               Google
               </p>
              </button>

              <button className="signup-social">
                <img className="logo" src="https://1000marcas.net/wp-content/uploads/2019/11/Instagram-logo.png"/>
                <p className="signup-text">
                Iniciar sesión con 
               <br />
               Instagram
               </p>
              </button>

              <button className="signup-social">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"/>
              <p className="signup-text">
                Iniciar sesión con 
               <br />
               Facebook
               </p>
              </button>
              <a className="link-footer" href="#">¿No consigues iniciar sesión?</a>
            </div>
            </form>

              {/* <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>Modal body text goes here.</p>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
              </Modal.Footer>
              </Modal.Dialog> */}
          </div>
    )
  }

}

export default SignupPage