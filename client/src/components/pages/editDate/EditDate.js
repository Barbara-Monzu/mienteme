import { useState, useEffect, useContext } from 'react'
import { Form } from 'react-bootstrap'
import DatesService from '../../services/dates.service'
import { useHistory } from 'react-router-dom'
import UserContext from '../../services/UserContext'

const datesService = new DatesService()

const EditDate = (props) => {

    let history = useHistory()
    const { loggedUser } = useContext(UserContext)

    const [formData, setFormData] = useState({
        nameDate: "",
        description: "",
        city: "",
        category: "",
        day: "",
    })

    useEffect(() => {
        props.dateSelected ?
            setFormData({
                nameDate: props.dateSelected.nameDate,
                description: props.dateSelected.description,
                city: props.dateSelected.city,
                category: props.dateSelected.category,
                day: props.dateSelected.day,

            })
            :

            setFormData({
                nameDate: "",
                description: "",
                city: "",
                category: "",
                day: "",

            })

    }, [])


    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.dateSelected ?
            (datesService
                .editDate(props.dateSelected._id, formData)
                .then(response => {
                    props.closeModal()
                    console.log("BIEN! EDITANDO CITAS", response.data)
                })
                .catch(err => console.error(err)))
            :
            (datesService
                .createDate(formData, loggedUser._id)
                .then(response => {
                    props.closeModal()
                    history.push("/perfil")
                    console.log("BIEN! CREANDO MI PRIMERA CITA", response.data)
                })
                .catch(err => console.error(err)))


    }


    return (
        <>
            <p>El formulario de editar cita</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control name="nameDate" value={formData.nameDate} onChange={e => handleChange(e)} type="text" placeholder="Nombre de cita" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control name="description" value={formData.description} onChange={e => handleChange(e)} type="text" label="" placeholder="Descripción" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control name="city" value={formData.city} onChange={e => handleChange(e)} type="text" placeholder="Ciudad" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control name="day" value={formData.day} onChange={e => handleChange(e)} type="text" placeholder="Día" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Control name="category" value={formData.category} onChange={e => handleChange(e)} type="text" placeholder="Categoría" />
                </Form.Group>
                {props.dateSelected ?
                    (<button className="signup" style={{ cursor: "pointer" }}>
                        Editar
                    </button>)
                    :
                    (<button className="signup" style={{ cursor: "pointer" }}>
                        Crear
                    </button>)}


            </Form>
        </>
    )
}
export default EditDate