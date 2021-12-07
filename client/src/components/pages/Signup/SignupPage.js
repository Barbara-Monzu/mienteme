import React, { Component } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import AuthService from '../../services/auth.service'

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
      <div style={{backgroundImage: "linear-gradient( 135deg, #3C8CE7 10%, #00EAFF 100%)", backgroundSize: "cover", height: "100vh"}}>
      <Row style={{paddingTop: "150px"}}>
          <Col md={{ span: 4, offset: 4 }}>
            <h2 >Sing Up</h2>

            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={this.handleInputChange} value={this.state.email} name="email" type="text" placeholder="Elige un nombre de usuario" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={this.handleInputChange} value={this.state.pwd} name="pwd" type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="dark" type="submit" style={{margin: "10px"}}>
                Submit
              </Button>

              <br></br>

              <Button variant="dark" type="submit" style={{margin: "10px"}}>
                Registrarme con Google
              </Button>

              <br></br>

              <Button variant="dark" type="submit" style={{margin: "10px"}}>
                Registrarme con Intagram
              </Button>

              <br></br>

              <Button variant="dark" type="submit" style={{margin: "10px"}}>
              Registrarme con Facebook
              </Button>


            </Form>
          </Col>
        </Row>
      </div>
    )
  }

}

export default SignupPage