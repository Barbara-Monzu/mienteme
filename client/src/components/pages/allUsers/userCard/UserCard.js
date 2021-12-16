import React, { useContext, useState, useEffect } from "react";
import './UserCard.css'
import { Link } from 'react-router-dom'
import DatesService from "../../../services/dates.service"
import RequestService from "../../../services/request.service"
import ConversationService from "../../../services/conversation.service"
import { Modal, Button } from 'react-bootstrap'

const datesService = new DatesService()
const requestService = new RequestService()
const conversationService = new ConversationService()
const peopleService = new ConversationService()


const UserCard = (props) => {

  const [dates, setDates] = useState([])
  const [dateSelected, setDateSelected] = useState([])
  const [trivial, setTrivial] = useState(false)
  const [success, setSuccess] = useState(false)
  const [wrong, setWrong] = useState(false)
  const [conversation, setConversation] = useState(false)


  useEffect(() => {

    showDates()
  }, [props.user])

  const showDates = () => {
    datesService.getUserDates(props.user._id)
      .then(response => {
        setDates(response.data)
      })
      .catch(err => console.log("hay un error al conseguir las citas del otro en el front", err))
  }

  const openTrivial = () => {
    setTrivial(true)
  }

  const closeModalTrivial = () => {
    setTrivial(false)
  }

  const openModalSuccess = () => {
    setTrivial(false)
    setSuccess(true)
  }

  const closeModalSuccess = () => {
    setSuccess(false)
  }

  const openWrong = () => {
    setTrivial(false)
    setWrong(true)
  }

  const closeModalWrong = () => {
    setWrong(false)
  }

  const chooseDate = (date) => {
    openTrivial()
    setDateSelected(date)
  }


  const nextUser = () => {
    closeModalWrong()
    closeModalSuccess()
    props.next()

  }

  const createRequest = () => {

    console.log("cita seleccionada y su creador CREANDO CON ESTO", dateSelected, props.user._id)
    requestService.create(dateSelected._id, props.user)
      .then(response => {

        nextUser()
        console.log("creando la request ==>", response.data)
      })
      .catch(err => console.log("hay un error al crear request en el front", err))

  }

  const createConversation = () => {
    openModalSuccess()
    closeModalTrivial()
    let idOtherUser = { idOtherUser: props.user._id }

    console.log("ME INTERESA ESTO para crear una conver", idOtherUser, dateSelected._id, dateSelected)
    conversationService
      .create(dateSelected._id, idOtherUser)
      .then(response => {
        setConversation(response.data._id)
        console.log("creando la conversación ==>", response.data)
      })
      .catch(err => console.log("hay un error crear conver en el front", err))

  }

  console.log("CONVER", conversation)


  const editRequestYes = (answer) => {
    let response = { response: answer }
    console.log("editando: LA REQUEST Y LA RESPUESTA", props.request, response)
    requestService.answer(props.request._id, response)
      .then(response => {
        console.log("EDITANDO REQUEST CON ÉXITO==>", response.data)
        props.next()
      })
      .catch(err => console.log("hay un error al modificar request en el front", err))

  }

  const deleteRequest = () => {
    console.log("BORRANDO LA PETICIÓN, PORQUE HE DICHO QUE NO", props.request)
    requestService.delete(props.request._id)
      .then(response => {
        console.log("BORRADA ==>", response.data)
        props.next()
      })
      .catch(err => console.log("hay un error al BORRAR request en el front", err))

  }


  return (

    <div className="userCard-container">
      <div className="userCard-subcontainer">
        <img className="userCard-img" src={props.user.profileImages} />

        <div className="userCard-info-container">
          <div className="userCard-info-1">
            <p className="userCard-name">{props.user.username}</p>
            <p className="userCard-age">{props.user.age}</p>
          </div>

          <p className="userCard-bio">{props.user.bio}</p>
        </div>
      </div>

      <div className="userCard-button-container">
        <button className="userCard-button" onClick={() => props.next()}>Siguiente</button>
      </div>
      {props.dateSelected ? (
        <>
          <p className="userCard-date-">{props.user.username} seleccionó tu cita</p>

          <div className="date">
            <p>{props.dateSelected.nameDate}</p>
            <p className="date-description">{props.dateSelected.description}</p>
            <p className="date-category">{props.dateSelected.category}</p>
          </div>

          <p className="date-category">¿Quieres darle una segunda oportunidad?</p>
          <button onClick={() => editRequestYes("YES")}>Sí</button>
          <button onClick={() => deleteRequest()}>No</button>
        </>
      )
        :
        (
          <>
            <div className="userCard-dates-home">
              <p className="userCard-date-title">Citas de {props.user.username}</p>
            </div>

            <div className="userCard-detail-date-home">
              {dates?.map((elm, i) => (

                <div key={i} className="userCard-key">

                  <div onClick={() => chooseDate(elm)} className="userCard-detail-date">
                    <p className="userCard-detail-date-name">{elm.nameDate}</p>
                    <p className="userCard-detail-date-description">{elm.description}</p>
                    <div className="userCard-detail-date-category-content">
                      <p className="userCard-detail-date-category">{elm.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>

        )
      }


      <Modal show={trivial} backdrop="static" onHide={closeModalTrivial} className="userCard-trivial-container">

        <Modal.Title className="userCard-trivial-header">¿Cuál es la mentira?</Modal.Title>

        <Modal.Body>
          <div className="userCard-trivial-subcontainer">
            <div onClick={() => openWrong()} className="">
              <div className="userCard-trivial-box">
                <p className="userCard-trivial-text">{props.user.questionTrue}</p>
              </div>
            </div>

            <div onClick={() => createConversation()} className="">
              <div className="userCard-trivial-box">
                <p className="userCard-trivial-text">{props.user.questionFalse}</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={success} backdrop="static" className="userCard-correctTrivial-container" onHide={closeModalSuccess}>

        <Modal.Title className="userCard-correctTrivial-title">¡¡¡Correcto!!!!</Modal.Title>

        <Modal.Body>

          <div className="userCard-correctTrivial-subcontainer">
            <Link className="userCard-correctTrivial-chat" to={`/chat/${conversation}/${props.user._id}`} style={{ margin: "10px" }}>
              <p>Chatea con {props.user.username}</p>
            </Link>

            <Link to="/click-me" style={{ margin: "10px" }}>
              <button className="userCard-correctTrivial-button" onClick={() => nextUser()}>Más tarde</button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={wrong}
        backdrop="static"
        onHide={closeModalWrong}
      >

        <Modal.Title className="search-card color" >Fallaste, ¿Quieres pedirle a {props.user.username} una segunda oportunidad?</Modal.Title>

        <Modal.Body>
          <button onClick={() => createRequest()}>Sí </button>

          <Link to="/click-me" style={{ margin: "10px" }}>
            <button onClick={() => nextUser()}>No, next</button>
          </Link>

          <Link to="/click-me" style={{ margin: "10px" }}>
            <button onClick={() => nextUser()}>Next</button>
          </Link>

        </Modal.Body>

      </Modal>

    </div>

  )


}



export default UserCard