import React, { useContext, useState, useEffect } from "react";
import './UserCard.css'
import { Link } from 'react-router-dom'
import DatesService from "../../../services/dates.service"
import RequestService from "../../../services/request.service"
import ConversationService from "../../../services/conversation.service"

const datesService = new DatesService()
const requestService = new RequestService()
const conversationService = new ConversationService()
let random = Math.floor(Math.random() * 100)

const UserCard = (props) => {

  const [dates, setDates] = useState([])
  const [dateSelected, setDateSelected] = useState([])
  const [trivial, setTrivial] = useState(false)

  console.log("eL ID DEL OTRO", props.user._id)

  useEffect(() => {
    const waiting = async() => {
      const venga = await showDates() 
      await console.log("DATES", dates)
    }

    waiting()
  }, [props.user])
  
  const showDates = () => {
    datesService.getUserDates(props.user._id)
    .then(response => {
      console.log("Las citas del otro ----_________==>", response.data)
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

  // openModalSuccess = () => {
  //   this.closeModal()
  //   this.setState({
  //     showResponse: true
  //   })
  // }

  // modalWrong = () => {
  //   this.closeModalTrivial()
  //   this.setState({
  //     showRequest: true
  //   })
  // }


  // closeModalRequest = () => {
  //   this.setState({
  //     showRequest: false,
  //   })
  // }

  // closeModalResponse = () => {
  //   this.setState({
  //     showResponse: false,
  //   })
  // }

  const chooseDate = (date) => {
    openTrivial()
    setDateSelected(date)
  }


  const nextUser = () => {
    // closeModalRequest()
    // closeModalResponse()
    props.next()

  }


  const createRequest = () => {

    console.log("cita seleccionada", dateSelected)
    requestService.create({...dates[0]})
      .then(response => console.log("creando la request ==>", response.data))
      .catch(err => console.log("hay un error al crear request en el front", err))
  }

  const createConversation = () => {
    // openModalSuccess()
    // closeModalTrivial()

    conversationService.create(props.user._id, dateSelected._id)
      .then(response => console.log("creando la conversación ==>", response.data))
      .catch(err => console.log("hay un error crear conver en el front", err))
  }

  
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
          <button onClick={createRequest()}>Request</button>
          <p className="card-bio">{props.user.bio}</p>
        </div>

        <p className="date-title">Mis citas</p>

        {dates?.map((elm, i) => { 

          <div key={i} className="date">

            <div onClick={() => chooseDate(elm)} className="detail">
              <p>{elm.nameDate}</p>
              <p className="date-description">{elm.description}</p>
              <p className="date-category">{elm.category}</p>
            </div>

          </div> })}

      
        {/* <button onClick={openModal}>Quiero tener esta cita contigo</button>  */}

            {/* {state.random % 2 !== 0 } ?
        <Modal
          show={state.showTrivial}
          backdrop="static"
          onHide={closeModalTrivial}
        >
          <Modal.Header closeButton>
            <Modal.Title>Adivina la mentira y podrás hablar conmigo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div onClick={() => createConversation()} className="search-box">

              <div className="search-card two">
                <p className="search-title">{props.questionTrue}</p>
              </div>

            </div>
            <div onClick={() => modalWrong()} className="search-box">

              <div className="search-card two">
                <p className="search-title">{props.questionFalse}</p>
              </div>

            </div>

          </Modal.Body>
        </Modal>
            
        <Modal
          show={state.showResponse}
          backdrop="static"
          onHide={closeModalResponse}
        >
          <Modal.Header closeButton>
            <Modal.Title>Correcto!!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           
            <Link to="/privatechat" style={{ margin: "10px" }}>
              <p className="search-title">Chatea con {props.username}</p>
             
            </Link>

            <Link to="/click-me" style={{margin: "10px"}}>
            <button onClick={() => nextUser()}>Next</button>
            </Link>

          </Modal.Body>

        </Modal>

        {/* <Modal
          show={state.showRequest}
          backdrop="static"
          onHide={closeModalRequest}
        >
          <Modal.Header closeButton>
            <Modal.Title>Fallaste, ¿Quieres pedirle a {props.username} una segunda oportunidad?</Modal.Title>
            <button onClick={() => createRequest()}>Sí </button>

            <Link to="/click-me" style={{margin: "10px"}}>
            <button onClick={() => nextUser()}>No, next</button>
            </Link>

           
          </Modal.Header>
          <Modal.Body>
   
          </Modal.Body>

        </Modal> */}





      </div>

    )


}



export default UserCard