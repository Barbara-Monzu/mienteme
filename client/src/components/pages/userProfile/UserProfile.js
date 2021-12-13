import { useContext, useEffect, useState } from "react";
import DatesService from "../../services/dates.service";
import UserContext from '../../services/UserContext'
import { Link, useHistory } from 'react-router-dom'
import EditDate from '../editDate/EditDate'
import { Modal, Button } from 'react-bootstrap'



const datesService = new DatesService()

const UserProfile = () => {

  const { loggedUser } = useContext(UserContext)
  const [dates, setMydates] = useState([])
  const [dateSelected, setDateSelected] = useState(undefined)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    showDates()
  }, [modal])

  const showDates = () => {
    datesService.getOwnDates(loggedUser._id)
      .then(response => {
        setMydates(response.data)
        console.log("estoy mirando mis citas en mi perfil ==>", response.data)
      })
      .catch(err => console.log("hay un error al conseguir las citas del otro en el front", err))
  }

  console.log("mis citas", dates)

  const editDate = (date) => {
    setModal(true)
    setDateSelected(date)
  }

  const closeModal = () => {
    setModal(false)
  }



  return (
    <>
      <p>Se está renderizando La página de perfil</p>



      <div className="card-pic-container">
        <img className="card-pic" src={loggedUser.profileImages[0]} />

        <div className="info">
          <p className="card-name">{loggedUser.username}</p>
          <p className="card-age">{loggedUser.age}</p>
        </div>
        {/* <p className="card-bio">Lo que sea</p> */}


        <p className="date-title">Mis citas</p>

        {dates?.map((elm, i) =>

          <div key={i} className="date">

            <div className="detail">
              <p>{elm.nameDate}</p>
              <p className="date-description">{elm.description}</p>
              <p className="date-category">{elm.category}</p>
            </div>

            <button onClick={() => editDate(elm)} className=""> Editar Cita
            </button>

          </div>


        )}

        <Link className="link" to="/editar-perfil">
          Editar perfil
        </Link>


      </div>


        {/* <Modal
          show={modal}
          backdrop="static"
          onHide={closeModal}>

          <Modal.Header closeButton>
            <Modal.Title>Edita tu cita</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <EditDate dateSelected={dateSelected} closeModal={closeModal} />
          </Modal.Body>
        </Modal> */}


    </>

  )
}

export default UserProfile