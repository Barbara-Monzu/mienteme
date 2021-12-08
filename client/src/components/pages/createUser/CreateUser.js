import React, { useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import './CreateUser.css'
// import React, { useEffect } from 'react'
// const AuthService = new AuthService()

const CreateUser = () => {

    const [modal, setModal] = useState(false)
    
    const [formData, setFormData] = useState({
        username: "",
        profileImages: "",
        age: 0,
        bio: "",
        city: "",
        location: "",
        questionTrue: "",
        questionFalse: "",
        clue: "",
        dates: "",

    })

  
  const handleInputChange = (e) => {
    let { name, value } = e.currentTarget
    // setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // AuthService.signup()
    // .then(response => console.log(response))
    // .catch(err => console.log(err))
  }



  return (

    <Modal>
      <Modal.Header closeButton>
        <Modal.Title>Modal Form Title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control name="username" value={formData.username} onChange={handleInputChange} type="text" placeholder="Nombre de usuario" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control name="profileImages" value={formData.profileImages} onChange={handleInputChange} type="file" placeholder="Selecciona una imagen"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check name="age" value={formData.age}  type="number" label="age" placeholder="Edad"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check name="bio" value={formData.bio} onChange={handleInputChange} type="textarea" placeholder="Acerca de mí"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check name="city" value={formData.city} onChange={handleInputChange} type="text" placeholder="Ciudad"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check name="location" value={formData.location} onChange={handleInputChange} type="text" placeholder="Direccion"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check name="questionTrue" value={formData.questionTrue} onChange={handleInputChange} type="text" placeholder="Pregunta Verdadera" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check name="questionFalse" value={formData.questionFalse} onChange={handleInputChange} type="text" placeholder="Pregunta Falsa"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check name="questionTrue" value={formData.questionTrue} onChange={handleInputChange} type="text" placeholder="Pista"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check name="questionFalse" value={formData.questionFalse} onChange={handleInputChange} type="text" placeholder="Pregunta Falsa"/>
      </Form.Group>
      </Form>

  </Modal.Body>
  <Modal.Footer>
      <Button onClick={() => setModal(!modal)} variant="primary" type="submit">
        Crea tu primer cita
      </Button>
  </Modal.Footer>
</Modal>

  )
}

export default CreateUser