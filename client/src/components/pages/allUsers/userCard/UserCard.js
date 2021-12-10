import React from 'react'
import './UserCard.css'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Component } from "react";
import DatesService from "../../../services/dates.service"
import RequestService from "../../../services/request.service"
import ConversationService from "../../../services/conversation.service"


class UserCard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showTrivial: false,
      showResponse: false,
      showRequest: false,
      showDates: [],
      dateSelected: {}
    }

    this.datesService = new DatesService()
    this.requestService = new RequestService()
    this.conversationService = new ConversationService()
    this.random = Math.floor(Math.random() * 100)
    console.log(this.props._id)
  }

  componentDidMount() {
    this.showDates()

  }

  openTrivial = () => {
    this.setState({
      showTrivial: true
    })
  }

  openModalSuccess = () => {
    this.closeModal()
    this.setState({
      showResponse: true
    })
  }

  modalWrong = () => {
    this.closeModalTrivial()
    this.setState({
      showRequest: true
    })
  }

  closeModalTrivial = () => {
    this.setState({
      showTrivial: false
    })
  }

  closeModalRequest = () => {
    this.setState({
      showRequest: false,
    })
  }

  closeModalResponse = () => {
    this.setState({
      showResponse: false,
    })
  }

  dateSelected = (date) => {
    this.openTrivial()
    this.setState({
      dateSelected: date
    })
  }

  showDates = () => {
    this.datesService.getUserDates(this.props._id)
      .then(response => {
        console.log("estoy mirando las citas del otro ==>", response.data)
        this.setState({
          showDates: response.data
        })
      })
      .catch(err => console.log("hay un error al conseguir las citas del otro en el front", err))
  }

  nextUser = () => {
    this.closeModalRequest()
    this.closeModalResponse()
    this.props.getRandomUser()
    this.showDates()
  }


  createRequest = () => {

    console.log("cita seleccionada", this.state.dateSelected)
    this.requestService.create({ ...this.state.dateSelected })
      .then(response => console.log("creando la request ==>", response.data))
      .catch(err => console.log("hay un error al crear request en el front", err))
  }

  createConversation = () => {
    this.openModalSuccess()
    this.closeModalTrivial()

    this.conversationService.create(this.props._id, this.state.dateSelected._id)
      .then(response => console.log("creando la conversación ==>", response.data))
      .catch(err => console.log("hay un error crear conver en el front", err))
  }

  render() {
    return (

      <div className="card">
        <img className="profile-pic" src={this.props.profileImages} />


        <div className="card-pic-container">
          <img className="card-pic" src={this.props.profileImages} />

          <div className="info">
            <p className="card-name">{this.props.username}</p>
            <p className="card-age">{this.props.age}</p>
          </div>
          <button onClick={() => this.nextUser()}>Next</button>
          {/* <p className="card-bio">Lo que sea</p> */}
        </div>

        <p className="date-title">Mis citas</p>

        {this.state.showDates?.map((elm, i) =>

          <div key={i} className="date">

            <div onClick={() => this.dateSelected(elm)} className="detail">
              <p>{elm.nameDate}</p>
              <p className="date-description">{elm.description}</p>
              <p className="date-category">{elm.category}</p>
            </div>

          </div>

        )}
        {/* <button onClick={this.openModal}>Quiero tener esta cita contigo</button> */}

            {/* {this.state.random % 2 !== 0 } ? */}
        <Modal
          show={this.state.showTrivial}
          backdrop="static"
          onHide={this.closeModalTrivial}
        >
          <Modal.Header closeButton>
            <Modal.Title>Adivina la mentira y podrás hablar conmigo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div onClick={() => this.createConversation()} className="search-box">

              <div className="search-card two">
                <p className="search-title">{this.props.questionTrue}</p>
              </div>

            </div>
            <div onClick={() => this.modalWrong()} className="search-box">

              <div className="search-card two">
                <p className="search-title">{this.props.questionFalse}</p>
              </div>

            </div>

          </Modal.Body>
        </Modal>
            
        <Modal
          show={this.state.showResponse}
          backdrop="static"
          onHide={this.closeModalResponse}
        >
          <Modal.Header closeButton>
            <Modal.Title>Correcto!!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* {this.random % 2 !== 0 } ? */}
            <Link to="/privatechat" style={{ margin: "10px" }}>
              <p className="search-title">Chatea con {this.props.username}</p>
              {/* <PrivateChat {...props}/> */}
            </Link>

            <Link to="/click-me" style={{margin: "10px"}}>
            <button onClick={() => this.nextUser()}>Next</button>
            </Link>

          </Modal.Body>

        </Modal>

        <Modal
          show={this.state.showRequest}
          backdrop="static"
          onHide={this.closeModalRequest}
        >
          <Modal.Header closeButton>
            <Modal.Title>Fallaste, ¿Quieres pedirle a {this.props.username} una segunda oportunidad?</Modal.Title>
            <button onClick={() => this.createRequest()}>Sí </button>

            <Link to="/click-me" style={{margin: "10px"}}>
            <button onClick={() => this.nextUser()}>No, next</button>
            </Link>

           
          </Modal.Header>
          <Modal.Body>
   
          </Modal.Body>

        </Modal>





      </div>

    )
  }

}



export default UserCard