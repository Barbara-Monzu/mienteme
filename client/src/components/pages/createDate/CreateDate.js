import React, { useState } from 'react'
// import { Form, Button, Option } from 'react-bootstrap'
import './CreateDate.css'

const CreateDate = () => {

    const [ date, setDate ] = useState({
        nameDate: "",
        description: "",
        category: ['GASTRONOMÍA', 'CULTURA', 'NATURALEZA', 'RANDOM', 'OTROS' ],
        pictureDate: "",
        day: "",
        addressDate: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.currentTarget
        setDate({ ...date, [ name ]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        
        <form onSubmit={ handleSubmit }>
        
            <form >
                <label></label>
                <input name="name" value={ date.Datename } onChange={ handleInputChange } type="text" placeholder="" />
            </form>

            <form >
                <label></label>
                <input name="description" value={ date.description } onChange={ handleInputChange } type="text" placeholder="" />
            </form>

            <form >
                <label></label>
                <select name="category">
                <option value={ date.category[0] } onChange={ handleInputChange } type="text" placeholder=""> </option>
                <option value={ date.category[1] } onChange={ handleInputChange } type="text" placeholder=""> </option>
                <option value={ date.category[2] } onChange={ handleInputChange } type="text" placeholder=""> </option>
                <option value={ date.category[3] } onChange={ handleInputChange } type="text" placeholder=""> </option>
                <option value={ date.category[4] } onChange={ handleInputChange } type="text" placeholder=""> </option>
                </select>
            </form>

            <form >
                <label></label>
                <input name="pictureDate" value={ date.pictureDate } onChange={ handleInputChange } type="file" placeholder="" />
            </form>

            <form >
                <label></label>
                <input name="day" value={ date.day } onChange={ handleInputChange } type="text" placeholder="" />
            </form>

            <form >
                <label></label>
                <input name="addressDate" value={date.addressDate} onChange={ handleInputChange } type="text" placeholder="" />
            </form>

            <button  variant="primary" type="submit">
                Submit
            </button>
        
        </form>
    )
}

export default CreateDate