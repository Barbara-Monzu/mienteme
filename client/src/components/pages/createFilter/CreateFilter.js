import React, { useState } from 'react'
import { Form, Button, Modal, Option } from 'react-bootstrap'
import 'CreateFilter.css'

const CreateFilter = () => {
    const [filter, setFilter] = useState({
        age: "",
        gender: ['Mujer', 'Hombre', 'Ambos']
    })

    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget
        setFilter({ ...filter, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (

        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Desde</Form.Label>
                <Form.Control name="age" value={filter.age} onChange={handleInputChange} type="text" placeholder="" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Hasta</Form.Label>
                <Form.Control name="age" value={filter.age} onChange={handleInputChange} type="text" placeholder="" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Género</Form.Label>
                <Form.Select name="category" />
                <Option value={filter.gender[0]} onChange={handleInputChange} type="text" placeholder=""> </Option>
                <Option value={filter.gender[1]} onChange={handleInputChange} type="text" placeholder=""> </Option>
                <Option value={filter.gender[2]} onChange={handleInputChange} type="text" placeholder=""> </Option>
            </Form.Group>
        </Form>
    )
}

export default CreateFilter