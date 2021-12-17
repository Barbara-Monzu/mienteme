import { useContext, useEffect, useState } from "react";
import "./UserProfile.css"
import DatesService from "../../services/dates.service";
import UserContext from '../../services/UserContext'
import { Link, useHistory } from 'react-router-dom'
import EditDate from '../editDate/EditDate'
import { Modal, Button } from 'react-bootstrap'



const datesService = new DatesService()

const UserProfile = () => {

  let history = useHistory()

  const { loggedUser } = useContext(UserContext)
  const [dates, setMydates] = useState([])
  const [dateSelected, setDateSelected] = useState(undefined)
  const [modal, setModal] = useState(false)
  const [modaltwo, setModaltwo] = useState(false)

  useEffect(() => {
    showDates()
  }, [modal, dates])

  const showDates = () => {
    datesService.getOwnDates(loggedUser._id)
      .then(response => {
        setMydates(response.data)
        console.log("estoy mirando mis citas en mi perfil ==>", response.data)
      })
      .catch(err => console.log("hay un error al conseguir las citas del otro en el front", err))
  }


  const editDate = (date) => {
    setModal(true)
    setDateSelected(date)
  }

  const deleteDate = (id) => {
    datesService.deleteDate(id)
      .then(response => {
        history.push('/perfil')
        console.log("ELIMINANDO CON ÉXITO ==>", response.data)
      })
      .catch(err => console.log("hay un error al conseguir las citas del otro en el front", err))
  }

  const closeModal = () => {
    setModal(false)
  }

  const closeModaltwo = () => {
    setModal(false)
  }



  return (
    <>
      <div className="userProfile-container">
        <div className="userProfile-subcontainer">
          <img className="userProfile-img" src={loggedUser.profileImages[0]} />

          <div className="userProfile-info-container">
            <div className="userProfile-info-1">
              <p className="userProfile-name">{loggedUser.username}</p>
              <p className="userProfile-age">{loggedUser.age}</p>
            </div>
            <p className="userProfile-bio">{loggedUser.bio}</p>
          </div>
        </div>

        <div className="userProfile-link-container">
          {/* <div className="userProfile-button-subcontainer"> */}
          <button className="userProfile-button-create" onClick={() => setModal(true)}>Crea una cita</button>
          {/* </div> */}
          <Link className="userProfile-link" to="/editar-perfil">Editar perfil</Link>
        </div>

        <div className="userProfile-dates-home">
          <p className="userProfile-date-title">Mis citas</p>
        </div>

        <div className="userProfile-detail-date-home">
          {dates?.map((elm, i) =>

            <div key={i}>
              <div className="userProfile-detail-date">
                <p className="userProfile-detail-date-name">{elm.nameDate}</p>
                <p className="userProfile-detail-date-description">{elm.description}</p>
                <p className="userProfile-detail-date-description">{elm.day}</p>
                <div className="userProfile-detail-date-category-content">
                  <p className="userProfile-detail-date-category">{elm.category}</p>
                </div>
                <div className="userProfile-button">
                  <button onClick={() => editDate(elm)} className="userProfile-date-button">Editar </button>
                  <button onClick={() => deleteDate(elm._id)} className="userProfile-date-button">Borrar </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <Modal show={modal} backdrop="static" onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title> <p className="userProfile-modal-title">Edita tu cita</p> </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <EditDate dateSelected={dateSelected} closeModal={closeModal} />
          </Modal.Body>
        </Modal>

        <Modal show={modaltwo} backdrop="static" onHide={closeModaltwo}
        >
          <Modal.Header closeButton>
            <Modal.Title>Crea una cita</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditDate closeModal={closeModal} />
          </Modal.Body>
        </Modal>
      </div>


    </>

  )
}

export default UserProfile

