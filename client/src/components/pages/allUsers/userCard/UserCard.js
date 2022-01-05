import React, { useState, useEffect } from "react";
import './UserCard.css'
import { Link, useHistory } from 'react-router-dom'
import RequestService from "../../../services/request.service"
import UserDates from "./UserDates"
import UserInfo from "./UserInfo"
import RequestFailed from "./RequestFailed"
import ConversationService from "../../../services/conversation.service"
import TrivialA from "./TrivialA"
import TrivialB from "./TrivialB"
import SuccessModal from "./SuccessModal"
import WrongModal from "./WrongModal"
import ClueModal from "./ClueModal"
import AlreadyMatchModal from "./AlreadyMatchModal"

const requestService = new RequestService()
const conversationService = new ConversationService()
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
    requestService
      .answer(props.request._id, response)
      .then(response => {
        console.log("EDITANDO REQUEST CON ÉXITO==>", response.data)
        props.next()
      })
      .catch(err => console.log("hay un error al modificar request en el front", err))

  }

  const deleteRequest = () => {
    console.log("BORRANDO LA PETICIÓN, PORQUE HE DICHO QUE NO", props.request)
    requestService
      .delete(props.request._id)
      .then(response => {
        console.log("BORRADA ==>", response.data)
        props.next()
      })
      .catch(err => console.log("hay un error al BORRAR request en el front", err))

  }

  console.log("props.dateSelected", props.dateSelected)

  return (

    <div className="userCard-container">
      <UserInfo user={props.user} />

      {!props.disableBtn &&
        (<div className="userCard-button-container">
          <button className="userCard-button" onClick={() => props.next()}>Siguiente</button>
        </div>)}

      {props.dateSelected ? <RequestFailed user={props.user} dateSelected={props.dateSelected}
        deleteRequest={deleteRequest} editRequestYes={editRequestYes} />
        : <UserDates user={props.user} chooseDate={chooseDate} secondOpor={props.secondOpor} />}

      {(random % 2 !== 0) ?
        <TrivialA trivial={trivial} closeModalTrivial={closeModalTrivial}
          openWrong={openWrong} createConversation={createConversation} clueModal={clueModal} user={props.user} />

        : <TrivialB trivial={trivial} closeModalTrivial={closeModalTrivial}
          openWrong={openWrong} createConversation={createConversation} clueModal={clueModal} user={props.user} />}

      <SuccessModal success={success} closeModalSuccess={closeModalSuccess} conversation={conversation}
        user={props.user} nextUser={nextUser} alreadyClue={alreadyClue} />

      <WrongModal wrong={wrong} closeModalWrong={closeModalWrong} alreadyClue={alreadyClue}
        user={props.user} nextUser={nextUser} createRequest={createRequest} />

      <ClueModal clue={clue} closeModalClue={closeModalClue} user={props.user} />

      <AlreadyMatchModal alreadyMatch={alreadyMatch} closeAlreadyMatch={closeAlreadyMatch} />

    </div>

  )

}


export default UserCard