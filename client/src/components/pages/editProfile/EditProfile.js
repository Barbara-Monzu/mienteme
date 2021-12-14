import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from '../../services/UserContext'
import './EditProfile.css'
import PeopleService from '../../services/people.service'
import UploadsService from '../../services/uploads.service'

import { Form } from 'react-bootstrap'

// import React, { useEffect } from 'react'


const peopleService = new PeopleService()
const uploadsService = new UploadsService()

const EditProfile = () => {


    const [modal, setModal] = useState(false)

    let history = useHistory()
    const { loggedUser, storeUser } = useContext(UserContext)
    const [formData, setFormData] = useState({
        username: "",
        profileImages: "",
        age: "",
        gender: "",
        bio: "",
        genderFilter: "",
        ageFirstFilter: undefined,
        ageSecondFilter: undefined,
        city: "",
        questionTrue: "",
        questionFalse: "",
        clue: "",
    })

    useEffect(() => {
        setFormData({
            username: loggedUser?.username,
            profileImages: "",
            age: loggedUser?.age,
            genre: loggedUser?.gender,
            bio: loggedUser?.bio,
            genderFilter: loggedUser?.filter.genderFilter,
            ageFirstFilter: loggedUser?.filter.ageFilter[0],
            ageSecondFilter: loggedUser?.filter.ageFilter[1],
            ageFilter: loggedUser?.filter.ageFilter,
            cityFilter: loggedUser?.filter.cityFilter,
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
        gender: "",
        bio: "",
        genderFilter: "",
        ageFirstFilter: "",
        ageSecondFilter: "",
        cityFilter: "",
        city: "",
        questionTrue: "",
        questionFalse: "",
        clue: "",
    })
}


const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
}


const handleSubmit = e => {
    e.preventDefault()

    peopleService
        .editProfile(loggedUser._id, formData)
        .then(res => {
            storeUser(res.data)
            clearState()
            history.push('/perfil')
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
        <h1>Editar Perfil</h1>


<Form className="editProfile-container" onSubmit={handleSubmit}>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <div className="editProfile-data">Username</div>
        <Form.Label></Form.Label>
        <Form.Control className="editProfile-input" name="username" value={formData.username} onChange={e => handleChange(e)} type="text" placeholder="Nombre de usuario" />
    </Form.Group>

    <Form.Group className="editProfile-data-container" controlId="formBasicPassword">
    <div className="editProfile-data">Imagen</div>
    <Form.Label></Form.Label>
    <Form.Control name="profileImages" value={formData.profileImages} onChange={(e) => handleFile(e)} type="file" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <div className="editProfile-data">Edad</div>
        <Form.Control  className="editProfile-input" name="age" value={formData.age} onChange={e => handleChange(e)} type="number" placeholder="Edad" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <div className="editProfile-data">Bio</div>
        <Form.Control  className="editProfile-input" name="bio" value={formData.bio} onChange={e => handleChange(e)} type="textarea" placeholder="Acerca de mí" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <div className="editProfile-data">Ciudad</div>
        <Form.Control  className="editProfile-input" name="city" value={formData.city} onChange={e => handleChange(e)} type="text" placeholder="Ciudad" />
    </Form.Group>

    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check name="location" value={formData.location} onChange={e => handleChange(e)} type="text" placeholder="Direccion"/>
  </Form.Group> */}

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <div className="editProfile-data">Pregunta verdadera</div>
        <Form.Control className="editProfile-input" name="questionTrue" value={formData.questionTrue} onChange={e => handleChange(e)} type="text" placeholder="Pregunta Verdadera" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <div className="editProfile-data">Pregunta Falsa</div>
        <Form.Control className="editProfile-input" name="questionFalse" value={formData.questionFalse} onChange={e => handleChange(e)} type="text" placeholder="Pregunta Falsa" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <div className="editProfile-data">Pista</div>
        <Form.Control className="editProfile-input" name="clue" value={formData.clue} onChange={e => handleChange(e)} type="text" placeholder="Pon una pista..." />
    </Form.Group>
    <br />
    
    <h3 className="editProfile-h3">¿Con quién quieres quedar?</h3>
    <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
    <p className="editProfile-data">Género</p>
    <Form.Control className="editProfile-input" name="genderFilter" value={formData.genderFilter} onChange={e => handleChange(e)} type="text" placeholder="¿Mujer, hombre o ambos?"/>
  </Form.Group>

  <p className="editProfile-data">Edad</p>

  <Form.Group className="mb-3" controlId="formBasicCheckbox"> <p className="editProfile-data">Edad(desde/hasta)</p>
    <Form.Control className="editProfile-input" name="ageFirstFilter" value={formData.ageFirstFilter} onChange={e => handleChange(e)} type="text" placeholder="Filtra por edad, introduce un número "/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Control className="editProfile-input" name="ageSecondFilter" value={formData.ageSecondFilter} onChange={e => handleChange(e)} type="text" placeholder="hasta..."/>
  </Form.Group>
  <p className="editProfile-data">Ciudad</p>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Control className="editProfile-input" name="cityFilter" value={formData.cityFilter} onChange={e => handleChange(e)} type="text" placeholder="Por ciudad..."/>
  </Form.Group>

    <button className="editProfile-button" style={{ cursor: "pointer" }}>
        Editar
    </button>



</Form>
    </>


)
}

export default EditProfile