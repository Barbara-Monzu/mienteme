import React, { useState, useEffect } from "react";
import './UserCard.css'
import { Link, useHistory } from 'react-router-dom'
import RequestService from "../../../services/request.service"
import UserDates from "./UserDates"
import UserInfo from "./UserInfo"
import RequestFailed from "./RequestFailed"
import ConversationService from "../../../services/conversation.service"
import { Modal, Button } from 'react-bootstrap'

const requestService = new RequestService()
const conversationService = new ConversationService()
const peopleService = new ConversationService()

let random;

const UserCard = (props) => {

  const [dateSelected, setDateSelected] = useState([])
  const [trivial, setTrivial] = useState(false)
  const [success, setSuccess] = useState(false)
  const [wrong, setWrong] = useState(false)
  const [conversation, setConversation] = useState(false)
  const [clue, setModalClue] = useState(false)
  const [alreadyClue, setAlreadyClue] = useState(false)
  const [alreadyMatch, setAlreadyMatch] = useState(false)

  const history = useHistory()

  useEffect(() => {

    random = Math.floor(Math.random() * (50))
  }, [props.user])


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
    !props.disableTrivial ? openTrivial() : openAlreadyMatch()
    setDateSelected(date)
  }

  const openAlreadyMatch = () => {
    setAlreadyMatch(true)
  }

  const closeAlreadyMatch = () => {
    setAlreadyMatch(false)
  }


  const nextUser = () => {
    closeModalWrong()
    closeModalSuccess()

    props.disableBtn ? history.push("/click-me") : props.next()

  }

  const clueModal = () => {
    setModalClue(true)
    setTrivial(false)

  }

  const closeModalClue = () => {
    setModalClue(false)
    setTrivial(true)
    setAlreadyClue(true)

  }


  const createRequest = () => {

    requestService
      .create(dateSelected._id, props.user)
      .then(response => {
        setAlreadyClue(false)
        nextUser()
        console.log("creando la request ==>", response.data)
      })
      .catch(err => console.log("hay un error al crear request en el front", err))

  }

  const createConversation = () => {
    openModalSuccess()
    closeModalTrivial()
    setAlreadyClue(false)
    let idOtherUser = { idOtherUser: props.user._id }

    conversationService
      .create(dateSelected._id, idOtherUser)
      .then(response => setConversation(response.data._id))
      .catch(err => console.log("hay un error crear conver en el front", err))

  }

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

  console.log("props.dateSelected", props.dateSelected)
  console.log("RANDOM", random)
  console.log("props.user.questionTrue", props.user.questionTrue)
  console.log("props.user.questionFalse", props.user.questionFalse)

  return (

    <div className="userCard-container">
      <UserInfo user={props.user} />

      {!props.disableBtn &&
        (<div className="userCard-button-container">
          <button className="userCard-button" onClick={() => props.next()}>Siguiente</button>
        </div>)}


      {props.dateSelected ? <RequestFailed user={props.user} dateSelected={props.dateSelected}
        deleteRequest={deleteRequest} editRequestYes={editRequestYes} />
        : <UserDates user={props.user} chooseDate={chooseDate} secondOpor={props.secondOpor} />
      }

      {(random % 2 !== 0) ? (

        <Modal show={trivial} backdrop="static" onHide={closeModalTrivial} className="userCard-trivial-container">
          <Modal.Title><p className="userCard-trivial-header">¿Cuál es la mentira?</p>
          </Modal.Title>
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
              {!alreadyClue && (
                <div onClick={() => clueModal()} className="">
                  <div className="userCard-trivial-box">
                    <p className="userCard-trivial-text">Pista</p>
                  </div>
                </div>)}
            </div>

          </Modal.Body>
        </Modal>) :

        (<Modal show={trivial} backdrop="static" onHide={closeModalTrivial} className="userCard-trivial-container">
          <Modal.Title className="userCard-trivial-header">¿Cuál es la mentira?</Modal.Title>
          <Modal.Body>
            <div className="userCard-trivial-subcontainer">
              <div onClick={() => createConversation()} className="">
                <div className="userCard-trivial-box">
                  <p className="userCard-trivial-text">{props.user.questionFalse}</p>
                </div>
              </div>

              <div onClick={() => openWrong()} className="">
                <div className="userCard-trivial-box">
                  <p className="userCard-trivial-text">{props.user.questionTrue}</p>
                </div>
              </div>
              {!alreadyClue && (
                <div onClick={() => clueModal()} className="">
                  <div className="userCard-trivial-box">
                    <p className="userCard-trivial-text">Pista</p>
                  </div>
                </div>)}
            </div>
          </Modal.Body>
        </Modal>)}


      <Modal show={success} backdrop="static" className="userCard-correctTrivial-container" onHide={closeModalSuccess}>
        <Modal.Title> <p className="userCard-correctTrivial-title">¡¡¡Correcto!!!</p> </Modal.Title>
        <Modal.Body>

          <div className="userCard-correctTrivial-subcontainer">
            <Link className="userCard-correctTrivial-chat" to={`/chat/${conversation}/${props.user._id}`}>
              <p>Chatea con {props.user.username}</p>
            </Link>

            <Link to="/click-me" style={{ margin: "10px" }}>
              <button className="userCard-correctTrivial-button" onClick={() => nextUser()}>Más tarde</button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={wrong} backdrop="static" onHide={closeModalWrong}>

        <Modal.Title> <p className="userCard-wrongTrivial-title">Fallaste, ¿Quieres pedirle a {props.user.username} una segunda oportunidad?</p> </Modal.Title>
        <Modal.Body>
          <div className="userCard-wrongTrivial-buttons">
            <button className="userCard-wrongTrivial-button" onClick={() => createRequest()}>Sí</button>

            <Link to="/click-me" style={{ margin: "10px" }}>
              <button className="userCard-wrongTrivial-button" onClick={() => nextUser()}>No</button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={clue} backdrop="static" className="userCard-correctTrivial-container" onHide={closeModalClue}>

        <Modal.Title className="userCard-correctTrivial-title">Pista
          <img className="clue-picture" style={{ width: "40px", heigth: "40px" }} src="https://cdn-icons-png.flaticon.com/512/3798/3798376.png" alt="" />
        </Modal.Title>
        <Modal.Body>
          <div className="userCard-trivial-subcontainer">
            <div className="userCard-trivial-box">
              <p className="userCard-trivial-text">{props.user.clue}</p>
            </div>
            <div className="userCard-trivial-box" onClick={() => closeModalClue()} className=""> Ok
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={alreadyMatch} backdrop="static" className="userCard-correctTrivial-container" onHide={closeAlreadyMatch}>
        <Modal.Header closeButton> Lo sentimos </Modal.Header>
        <Modal.Body >
          <p className="userCard-trivial-text">No puedes seleccionar otra cita, ya has hecho match con este usuario.</p>
        </Modal.Body>
      </Modal>

    </div>

  )

}


export default UserCard