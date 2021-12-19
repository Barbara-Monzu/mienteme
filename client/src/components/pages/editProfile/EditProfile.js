import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import UserContext from '../../services/UserContext'
import './EditProfile.css'
import PeopleService from '../../services/people.service'
import UploadsService from '../../services/uploads.service'

import { Form } from 'react-bootstrap'

const peopleService = new PeopleService()
const uploadsService = new UploadsService()

const EditProfile = () => {


    let history = useHistory()
    const { loggedUser, storeUser } = useContext(UserContext)
    const [formData, setFormData] = useState({
        username: "",
        profileImages: "",
        age: "",
        gender: "",
        bio: "",
        genderFilter: "BOTH",
        ageFirstFilter: undefined,
        ageSecondFilter: undefined,
        city: "MADRID",
        questionTrue: "",
        questionFalse: "",
        clue: "",
        loading: false
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
            loading: false,
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
                console.log("EDITANDO CON ÉXITO", res.data)
                storeUser(res.data)
                clearState()
                history.push('/perfil')
            })
            .catch(err => console.error(err))
    }


    const handleFile = e => {
        setFormData({ ...formData, loading: true })

        const uploadedData = new FormData()
        uploadedData.append('imageData', e.target.files[0])

        uploadsService
            .uploadImage(uploadedData)
            .then(res => setFormData({ ...formData, loading: false, profileImages: res.data.cloudinary_url }))
            .catch(err => console.error(err))
    }



    return (

        <>
            <div className="">
                <h3 className="editProfile-h3">Editar Perfil</h3>
                <Form className="editProfile-container" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        
                        <div className="editProfile-data">Nombre</div>
                            <Form.Control className="editProfile-input" name="username" value={formData.username} onChange={e => handleChange(e)} type="text" placeholder="Nombre de usuario" />
                       
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        
                        <div className="editProfile-data">Imagen de perfil</div>
                            <Form.Control name="editProfile-image" onChange={(e) => handleFile(e)} type="file" />
                     
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <div className="editProfile-data">Edad</div>
                            <Form.Control className="editProfile-input" name="age" value={formData.age} onChange={e => handleChange(e)} type="number" placeholder="Edad" />
                       
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <div className="editProfile-data">Bio</div>
                            <Form.Control className="editProfile-input" name="bio" value={formData.bio} onChange={e => handleChange(e)} type="textarea" placeholder="Acerca de mí" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <div className="editProfile-data">Ciudad</div>
                            <Form.Control className="editProfile-input" name="city" value={formData.city} onChange={e => handleChange(e)} type="text" placeholder="Ciudad" />
                       
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <div className="editProfile-data">Escribe una verdad sobre ti</div>
                            <Form.Control className="editProfile-input" name="questionTrue" value={formData.questionTrue} onChange={e => handleChange(e)} type="text" placeholder="Escribe una verdad sobre ti" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <div className="editProfile-data">Escribe una mentira sobre ti</div>
                            <Form.Control className="editProfile-input" name="questionFalse" value={formData.questionFalse} onChange={e => handleChange(e)} type="text" placeholder="Escribe una mentira sobre ti" />
                       
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <div className="editProfile-data">Da una pista</div>
                            <Form.Control className="editProfile-input" name="clue" value={formData.clue} onChange={e => handleChange(e)} type="text" placeholder="Da una pista..." />
                       
                    </Form.Group>

                    <h3 className="editProfile-h3">¿Con quién quieres quedar?</h3>
                    <div className="checkbox">
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <p className="editProfile-gender">Mujeres</p>
                            <Form.Check className="editProfile-checkbox" name="genderFilter" value="WOMAN" onChange={e => handleChange(e)} type="radio" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <p className="editProfile-gender">Hombres</p>
                            <Form.Check className="editProfile-checkbox" name="genderFilter" value="MAN" onChange={e => handleChange(e)} type="radio" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <p className="editProfile-gender">Ambos</p>
                            <Form.Check className="editProfile-checkbox" name="genderFilter" value="BOTH" onChange={e => handleChange(e)} type="radio" />
                        </Form.Group>
                    </div>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox"> <p className="editProfile-data"></p>
                    <p className="editProfile-data">Rango de edad</p>
                    <p className="editProfile-data">Desde:</p>
                        <Form.Control className="editProfile-input" name="ageFirstFilter" value={formData.ageFirstFilter} onChange={e => handleChange(e)} type="number" placeholder="Filtra por edad(introduce un número)" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p className="editProfile-data">Hasta:</p>
                        <Form.Control className="editProfile-input" name="ageSecondFilter" value={formData.ageSecondFilter} onChange={e => handleChange(e)} type="number" placeholder="Filtra por edad(introduce un número)" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <div className="editProfile-data">Filtra por ciudad</div>
                        <Form.Control className="editProfile-input" name="cityFilter" value={formData.cityFilter} onChange={e => handleChange(e)} type="text" placeholder="Por ciudad..." />
                    </Form.Group>

                    <div className="editProfile-button-container">
                        <button className="editProfile-button">Editar</button>
                    </div>

                </Form>

            </div>
        </>


    )
}

export default EditProfile