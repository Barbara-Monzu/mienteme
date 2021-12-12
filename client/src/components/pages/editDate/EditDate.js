import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import DatesService from '../../services/dates.service'

const datesService = new DatesService()

const EditDate = (props) => {

    const [formData, setFormData] = useState({
        nameDate: "",
        description: "",
        street: "",
        number: "",
        city: "",
        category: "",
        day: "",
    })

    useEffect(() => {
        setFormData({
            nameDate: props.dateSelected.nameDate,
            description: props.dateSelected.description,
            street: props.dateSelected.street,
            number: props.dateSelected.number,
            city: props.dateSelected.city,
            category: props.dateSelected.category,
            day: props.dateSelected.day,
           
    })
}, [])

const clearState = () => {
    setFormData({
        nameDate: "",
        description: "",
        street: "",
        number: "",
        city: "",
        category: "",
        day: "",
    })
}
const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
}
const handleSubmit = e => {
    e.preventDefault()
    datesService
        .editDate(props.dateSelected._id, formData)
        .then( response => console.log("EDITANDO CITAS", response.data))
        .catch(err => console.error(err))
        props.closeModal()
        
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
                <Form.Check name="description" value={formData.description} onChange={e => handleChange(e)} type="text" label="" placeholder="Descripción" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check name="street" value={formData.street} onChange={e => handleChange(e)} type="text" placeholder="Calle" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check name="number" value={formData.number} onChange={e => handleChange(e)} type="number" placeholder="Número" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check name="city" value={formData.city} onChange={e => handleChange(e)} type="text" placeholder="Ciudad" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check name="category" value={formData.category} onChange={e => handleChange(e)} type="text" placeholder="Categoría" />
            </Form.Group>
            <button className="signup" style={{ cursor: "pointer" }}>
                Editar
            </button>
        </Form>
    </>
)
}
export default EditDate