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
            history.push('/editar-perfil')
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
                <Form.Control name="username" value={formData.username} onChange={e => handleChange(e)} type="text" placeholder="Nombre de usuario" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control name="profileImages" value={formData.profileImages} onChange={(e) => handleFile(e)} type="file" placeholder="Selecciona una imagen"/>
          </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check name="age" value={formData.age} onChange={e => handleChange(e)} type="number" label="age" placeholder="Edad" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check name="bio" value={formData.bio} onChange={e => handleChange(e)} type="textarea" placeholder="Acerca de mí" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check name="city" value={formData.city} onChange={e => handleChange(e)} type="text" placeholder="Ciudad" />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check name="location" value={formData.location} onChange={e => handleChange(e)} type="text" placeholder="Direccion"/>
          </Form.Group> */}

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check name="questionTrue" value={formData.questionTrue} onChange={e => handleChange(e)} type="text" placeholder="Pregunta Verdadera" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check name="questionFalse" value={formData.questionFalse} onChange={e => handleChange(e)} type="text" placeholder="Pregunta Falsa" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check name="questionFalse" value={formData.clue} onChange={e => handleChange(e)} type="text" placeholder="Pon una pista..." />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicCheckbox"> ¿Con quién quieres quedar?
            <p>Filtra por Género</p>
            <Form.Check name="genderFilter" value={formData.genderFilter} onChange={e => handleChange(e)} type="text" placeholder="¿Mujeres, hombres o ambos?"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox"> Filtra por edad
            <Form.Check name="genderAge" value={formData.ageFirstFilter} onChange={e => handleChange(e)} type="text" placeholder="Filtra por edad, introduce un número "/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check name="genderAge" value={formData.ageSecondFilter} onChange={e => handleChange(e)} type="text" placeholder="hasta..."/>
          </Form.Group>

            <button className="signup" style={{ cursor: "pointer" }}>
                Editar
            </button>



        </Form>

    </>


)
}

export default EditProfile