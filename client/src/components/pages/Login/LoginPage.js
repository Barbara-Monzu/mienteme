import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import AuthService from '../../services/auth.service'
import imgPortada from '../../../images/Portada.jpg'

class LoginPage extends Component {
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

    this.authService.login(this.state.email, this.state.pwd)
      .then(response => {
        console.log(response)
        this.props.storeUser(response.data)
        // this.props.history.push("/click-me")

      })
      .catch(err => console.log(err.response.data.message))
  }

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget

    this.setState({ [name]: value })
  }

  render() {
    return (
      (

        <div style={{backgroundImage: "linear-gradient( 135deg, #3C8CE7 10%, #00EAFF 100%)", height: "100vh"}}>
          <Row style={{paddingTop: "150px"}}>

            <Col md={{ span: 4, offset: 4 }}>
              <h2>Login</h2>

              <hr />

              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control onChange={this.handleInputChange} value={this.state.email} name="email" type="text" placeholder="Elige un nombre de usuario" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={this.handleInputChange} value={this.state.pwd} name="pwd" type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="dark" type="submit">
                  Submit
                </Button>

                <br></br>

                      <Button variant="dark" type="submit" style={{margin: "10px"}}>
                        Iniciar sesión con Google
                      </Button>

                      <br></br>

                      {/* <Button onClick={SingInWithInstagram} variant="dark" type="submit" style={{margin: "10px"}}>
                      Iniciar sesión con Intagram
                      </Button>

                      <br></br>

                      <Button onClick={SingInWithFacebook} variant="dark" type="submit" style={{margin: "10px"}}>
                      Iniciar sesión con Facebook
                      </Button> */}
              </Form>
            </Col>
          </Row>
        </div>)
    )
  }

}

export default LoginPage

