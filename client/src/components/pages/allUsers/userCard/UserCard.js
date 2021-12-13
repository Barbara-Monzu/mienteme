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
let random = Math.floor(Math.random() * 100)

const UserCard = (props) => {

  const [dates, setDates] = useState([])
  const [dateSelected, setDateSelected] = useState([])
  const [trivial, setTrivial] = useState(false)
  const [success, setSuccess] = useState(false)
  const [wrong, setWrong] = useState(false)

  console.log("eL ID DEL OTRO", props.user._id)

  useEffect(() => {

    showDates()
  }, [props.user])

  const showDates = () => {
    datesService.getUserDates(props.user._id)
      .then(response => {
        console.log("Las citas del otro ----_________==>", response.data)
        setDates(response.data)
      })
      .catch(err => console.log("hay un error al conseguir las citas del otro en el front", err))
  }

  // const openTrivial = () => {
  //   setTrivial(true)
  // }

  // const closeModalTrivial = () => {
  //   setTrivial(false)
  // }

  // const openModalSuccess = () => {
  //   setTrivial(false)
  //   setSuccess(true)
  // }

  // const closeModalSuccess = () => {
  //   setSuccess(false)
  // }

  // const openWrong = () => {
  //   setTrivial(false)
  //   setWrong(true)
  // }

  // const closeModalWrong = () => {
  //   setWrong(false)
  // }

  // const chooseDate = (date) => {
  //   openTrivial()
  //   setDateSelected(date)
  // }


  // const nextUser = () => {
  //   closeModalWrong()
  //   closeModalSuccess()
  //   props.next()

  // }


  // const createRequest = () => {

  //   console.log("cita seleccionada y su creador", dateSelected, props.user)
  //   requestService.create(dateSelected, props.user)
  //     .then(response => console.log("creando la request ==>", response.data))
  //     .catch(err => console.log("hay un error al crear request en el front", err))
  // }

  // const createConversation = () => {
  //   openModalSuccess()
  //   closeModalTrivial()

  //   conversationService.create(props.user._id, dateSelected._id)
  //     .then(response => console.log("creando la conversación ==>", response.data))
  //     .catch(err => console.log("hay un error crear conver en el front", err))
  // }


  return (

    <div className="card">
      <img className="profile-pic" src={props.user.profileImages} />


      <div className="card-pic-container">
        <img className="card-pic" src={props.user.profileImages} />

        <div className="info">
          <p className="card-name">{props.user.username}</p>
          <p className="card-age">{props.user.age}</p>
        </div>
        <button onClick={() => props.next()}>Next</button>
        {/* <button onClick={() => createRequest()}>Request</button> */}
        <p className="card-bio">{props.user.bio}</p>
      </div>

      <p className="date-title">Mis citas</p>

      {dates?.map((elm, i) => (

        <div key={i} className="date">

          {/* <div onClick={() => chooseDate(elm)} className="detail"> */}
          <p>{elm.nameDate}</p>
          <p className="date-description">{elm.description}</p>
          <p className="date-category">{elm.category}</p>
          {/* </div> */}

        </div>
      ))}


      {/* <button onClick={openTrivial}>Quiero tener esta cita contigo</button> */}

      {/* random % 2 !== 0 } ? */}

      {/* <Modal
        show={trivial}
        backdrop="static"
        onHide={closeModalTrivial}
      >
        <Modal.Header closeButton>
          <Modal.Title>Adivina la mentira y podrás hablar conmigo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div onClick={() => createConversation()} className="search-box">

            <div className="search-card two">
              <p className="search-title">{props.user.questionTrue}</p>
            </div>

          </div>
          <div onClick={() => openWrong()} className="search-box">

            <div className="search-card two">
              <p className="search-title">{props.user.questionFalse}</p>
            </div>

          </div>

        </Modal.Body>
      </Modal> */}

      {/* <Modal
        show={success}
        backdrop="static"
        onHide={closeModalSuccess}
      >
        <Modal.Header closeButton>
          <Modal.Title>Correcto!!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Link to="/privatechat" style={{ margin: "10px" }}>
            <p className="search-title">Chatea con {props.user.username}</p>

          </Link>

          <Link to="/click-me" style={{ margin: "10px" }}>
            <button onClick={() => nextUser()}>Next</button>
          </Link>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalSuccess}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModalSuccess}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={wrong}
        backdrop="static"
        onHide={closeModalWrong}
      >
        <Modal.Header closeButton>
          <Modal.Title>Fallaste, ¿Quieres pedirle a {props.user.username} una segunda oportunidad?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button onClick={() => createRequest()}>Sí </button>

          <Link to="/click-me" style={{ margin: "10px" }}>
            <button onClick={() => nextUser()}>No, next</button>
          </Link>

        </Modal.Body>

      </Modal> */}





    </div>

  )


}



export default UserCard