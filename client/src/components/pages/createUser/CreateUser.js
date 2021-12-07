import React, { useState } from 'react'
// import { orm, Button, Modal } from 'react-bootstrap'
import './CreateUser.css'
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

    <form onSubmit={handleSubmit}>

      <form>
        <label></label>
            <input name="username" value={formData.username} onChange={handleInputChange} type="text" placeholder="Nombre de usuario" />
      </form>

      <form>
        <label></label>
            <input name="profileImages" value={formData.profileImages} onChange={handleInputChange} type="file" placeholder="selecciona una imagen"/>
      </form>

      <form>
        <label></label>
            <input name="age" value={formData.age}  type="number" label="age" placeholder="Edad"/>
      </form>

      <form>
        <label></label>
            <input name="bio" value={formData.bio} onChange={handleInputChange} type="textarea" placeholder="Acerca de mí" />
      </form>

      <form>
        <label></label>
            <input name="city" value={formData.city} onChange={handleInputChange} type="text" placeholder="Ciudad" />
      </form>

      <form>
        <label></label>
            <input name="location" value={formData.location} onChange={handleInputChange} type="text" placeholder="Direccion"/>
      </form>

      <form>
        <label></label>
            <input name="questionTrue" value={formData.questionTrue} onChange={handleInputChange} type="text" placeholder="Pregunta Verdadera" />
      </form>

      <form>
        <label></label>
            <input name="questionFalse" value={formData.questionFalse} onChange={handleInputChange} type="text" placeholder="Pregunta Falsa"/>
      </form>

      <form>
        <label></label>
            <input name="questionTrue" value={formData.questionTrue} onChange={handleInputChange} type="text" placeholder="Pista"/>
      </form>

      <button onClick={() => setModal(!modal)}>Crea tu primera cita</button>

    {/* <>
      <Modal show={modal} backdrop="static" onHide={setModal()}>
        <Modal.Header closeButton>
        <Modal.Title>Nueva Cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Dateform />
        </Modal.Body>
      </Modal>
    </> */}

      <button variant="primary" type="submit">
        Submit
      </button>
    </form>
  )
}

export default CreateUser