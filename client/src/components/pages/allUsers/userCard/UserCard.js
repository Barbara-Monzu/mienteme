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

  console.log("eL ID DEL OTRO", props.user._id)

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
      .then(response => console.log("creando la request ==>", response.data))
      .catch(err => console.log("hay un error al crear request en el front", err))
  }

  const createConversation = () => {
    openModalSuccess()
    closeModalTrivial()
    let idOtherUser = { idOtherUser: props.user._id }
    console.log("ME INTERESA ESTO para crear una conver", idOtherUser, dateSelected._id)
    conversationService.create(dateSelected._id, idOtherUser)
      .then(response => console.log("creando la conversación ==>", response.data))
      .catch(err => console.log("hay un error crear conver en el front", err))

      getConversation()
  }

  const getConversation = () => {

    conversationService.getOne(dateSelected._id)
      .then(response => 
        {console.log("cogiendo la conver que acabamos de crear ==>", response.data)
        setConversation(response.data)
      })
      .catch(err => console.log("hay un error crear conver en el front", err))

  }


  const editRequest = (answer) => {
    let response = { response: answer }
    console.log("editando: LA REQUEST Y LA RESPUESTA", props.request, response)
    requestService.answer(props.request._id, response)
      .then(response => console.log("editando la REQUEST ==>", response.data))
      .catch(err => console.log("hay un error al modificar request en el front", err))

    props.next()
  }

  // const getChat = (id) => {

  //   conversationService.getOne(props.user._id, id)
  //     .then(response => console.log("COJO LA CONVER Q ACABO DE CREAR ==>", response.data))
  //     .catch(err => console.log("hay un error crear conver en el front", err))
  // }


  return (

    <div className="card">



      <div className="card-pic-container">
        <img className="card-pic" src={props.user.profileImages} />

        <div className="all-card-info">
          <div className="card-info">
            <p className="card-name">{props.user.username}</p>
            <p className="card-age">{props.user.age}</p>
          </div>

          <p className="card-name">{props.user.bio}</p>

        </div>

        <br />

        <div className="card-button-container">
          <button className="card-button" onClick={() => props.next()}> <img className="card-button-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZlC4jg8lepAQZWxzDfAJt_7u1Fz_3IYKFr0yxngu_gWVsaUY-9uU0G5_otZfbqMbkoU&usqp=CAU" /> </button>
        </div>

      </div>
      {props.dateSelected ? (
        <>
          <p className="date-title">{props.user.username} Seleccionó tu cita</p>
          <p className="date-category">¿Quieres darle una Segunda Oportunidad?</p>
          <button onClick={() => editRequest("YES")}>Sí</button>
          <button onClick={() => editRequest("NO")}>No</button>
          <div className="date">


            <p>{props.dateSelected.nameDate}</p>
            <p className="date-description">{props.dateSelected.description}</p>
            <p className="date-category">{props.dateSelected.category}</p>


          </div>
        </>
      )
        :
        (
          <>
            <p className="card-date-title">Citas de {props.user.username}</p>
            {dates?.map((elm, i) => (

              <div key={i} className="date">

                <div onClick={() => chooseDate(elm)} className="detail">
                  <p>{elm.nameDate}</p>
                  <p className="date-description">{elm.description}</p>
                  <p className="date-category">{elm.category}</p>
                </div>

              </div>


            ))}
          </>

        )
      }


      {/* <button onClick={openTrivial}>Quiero tener esta cita contigo</button> */}

      {/* random % 2 !== 0 } ? */}

      <Modal
        show={trivial}
        backdrop="static"
        onHide={closeModalTrivial}
        className="trivial-modal"
      >

        <Modal.Title className="the-lie">¿Cuál es la mentira?</Modal.Title>

        <Modal.Body>
          <div className="tri-card">
            <div onClick={() => openWrong()} className="search-box">

              <div className="search-card color">
                <p className="search-title">{props.user.questionTrue}</p>
              </div>

            </div>
            <div onClick={() => createConversation()} className="search-box">

              <div className="search-card color" >
                <p className="search-title">{props.user.questionFalse}</p>
              </div>

            </div>
          </div>

        </Modal.Body>
      </Modal>

      <Modal
        show={success}
        backdrop="static"
        onHide={closeModalSuccess}
      >

        <Modal.Title>Correcto!!!!</Modal.Title>

        <Modal.Body>

          <Link to={`/chat/${conversation._id}/${props.user._id}`} style={{ margin: "10px" }}>
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

        <Modal.Title className="search-card color" >Fallaste, ¿Quieres pedirle a {props.user.username} una segunda oportunidad?</Modal.Title>

        <Modal.Body>
          <button onClick={() => createRequest()}>Sí </button>

          <Link to="/click-me" style={{ margin: "10px" }}>
            <button onClick={() => nextUser()}>No, next</button>
          </Link>

        </Modal.Body>

      </Modal>





    </div>

  )


}



export default UserCard