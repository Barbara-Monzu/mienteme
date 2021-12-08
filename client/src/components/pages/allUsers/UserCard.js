import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CoastersPage.css'
import imgPortada from '../../../images/Portada.jpg'
import DatesService from "../../services/dates.service";

const UserCard = ({ _id, name, description }) => {

  let serviceDate = new DatesService()

  let datesUser =  serviceDate.getUserDates(_id)
  .then(response => response.data)
  .catch(err => console.log(err))

// datesUser es un array y le llamaremos en cada componente de cita.
  
  return (
    <Card className="coaster-card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgPortada} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>

        <Link to={`/coaster/${_id}`}>
          <Button variant="primary">Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default UserCard