import { useState, useContext, useEffect, useHistory } from 'react'
import UserContext from '../../services/UserContext'
import './EditProfile.css'
import PeopleService from '../../services/people.service'
import UploadsService from '../../services/uploads.service'
import { Form, Button } from 'react-bootstrap'
// import React, { useEffect } from 'react'


const peopleService = new PeopleService()
const uploadsService = new UploadsService()

const EditProfile = () => {


  const [modal, setModal] = useState(false)

//   let history = useHistory()
  const { loggedUser, storeUser } = useContext(UserContext)
  const [formData, setFormData] = useState({
    username: "",
    profileImages: "",
    age: "",
    genre: "",
    bio: "",
    filter: {},
    city: "",
    questionTrue: "",
    questionFalse: "",
    clue: "",
  })

  useEffect(() => {
    setFormData({
      username: loggedUser?.username,
      profileImages: loggedUser?.profileImages,
      age: loggedUser?.age,
      genre: loggedUser?.genre,
      bio: loggedUser?.bio,
      filter: {
        genreFilter: loggedUser?.filter.genreFilter,
        ageFilter: loggedUser?.filter.ageFilter
      },
      city: loggedUser?.city,
      questionTrue: loggedUser?.questionTrue,
      questionFalse: loggedUser?.questionFalse,
      clue: loggedUser?.clue
    })

  }, [loggedUser])

  const clearState = () => {
    setFormData({ 
    username: "",
    profileImages: "",
    age: undefined,
    genre: "",
    bio: "",
    filter: {},
    city: "",
    questionTrue: "",
    questionFalse: "",
    clue: "",
     })
  }


  const handleInput = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }


const handleSubmit = e => {
  e.preventDefault()
  //incluir campos nuevos
  const { username, profileImages, age, genre, bio, city, questionTrue, questionFalse, clue } = formData
  // TODO revisar
  peopleService
    .editProfile(username, profileImages, age, genre, bio, city, questionTrue, questionFalse, clue)
    .then(res => {
      storeUser(res.data)
      clearState()
      this.props.history.push('/editar-perfil')
    })
    .catch(err => console.error(err))
}


const handleFile = e => {

  setFormData({ ...formData, isLoading: true })

  const uploadedData = new FormData()
  uploadedData.append('imageData', e.target.files[0])

  uploadsService
    .uploadImg(uploadedData)
    .then(res => setFormData({ ...formData, isLoading: false, profileImages: res.data.cloudinary_url }))
    .catch(err => console.error(err)) // TODO Gestionar error de cara al usuario
}



return (

    <>
    <p>El formulario de editar perfil</p>

    
      <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control name="username" value={formData.username} onChange={handleInput} type="text" placeholder="Nombre de usuario" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control name="profileImages" value={formData.profileImages} onChange={(e) => handleFile(e)} type="file" placeholder="Selecciona una imagen"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check name="age" value={formData.age}  type="number" label="age" placeholder="Edad"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check name="bio" value={formData.bio} onChange={handleInput} type="textarea" placeholder="Acerca de mí"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check name="city" value={formData.city} onChange={handleInput} type="text" placeholder="Ciudad"/>
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check name="location" value={formData.location} onChange={handleInput} type="text" placeholder="Direccion"/>
          </Form.Group> */}

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check name="questionTrue" value={formData.questionTrue} onChange={handleInput} type="text" placeholder="Pregunta Verdadera" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check name="questionFalse" value={formData.questionFalse} onChange={handleInput} type="text" placeholder="Pregunta Falsa"/>
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check name="genderFilter" value={formData.genderFilter} onChange={handleInput} type="text" placeholder="¿Mujeres, hombres o ambos?"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check name="genderAge" value={formData.genderAge[0]} onChange={handleInput} type="text" placeholder="Filtra por edad, introduce un número "/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check name="genderAge" value={formData.genderAge[1]} onChange={handleInput} type="text" placeholder="hasta..."/>
          </Form.Group> */}

          
      </Form>

      </>


  )
}

export default EditProfile