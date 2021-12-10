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
    console.log(this.props[0]._id)
  }

  componentDidMount() {
    this.showDates()

  }

  openModal = () => {
    this.setState({
      showTrivial: true
    })
  }

  modalSuccess = () => {
    this.closeModal()
    this.setState({
      showResponse: true
    })
  }

  modalWrong = () => {
    this.closeModal()
    this.setState({
      showRequest: true
    })
  }

  closeModal = () => {
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
      showResponse: true
    })
  }

  dateSelected = (date) => {
    this.openModal()
    this.setState({
      dateSelected: date
    })
  }

  showDates = () => {
    this.datesService.getUserDates(this.props[0]._id)
      .then(response => {
        console.log("estoy mirando las citas del otro ==>", response.data)
        this.setState({
          showDates: response.data
        })
      })
      .catch(err => console.log("hay un error al conseguir las citas del otro en el front", err))
  }

  nextUser = () => {
    this.props.next()
    this.showDates()
    // this.closeModalRequest()
    // this.closeModalResponse()
  }


  createRequest = () => {

    console.log("cita seleccionada", this.state.dateSelected)
    this.requestService.create({ ...this.state.dateSelected })
      .then(response => console.log("creando la request ==>", response.data))
      .catch(err => console.log("hay un error al crear request en el front", err))
  }

  createConversation = () => {
    this.modalSuccess()
    this.closeModal()

    this.conversationService.create(this.props[0]._id, this.state.dateSelected._id)
      .then(response => console.log("creando la conversación ==>", response.data))
      .catch(err => console.log("hay un error crear conver en el front", err))
  }

  render() {
    return (

      <div className="card">
        <img className="profile-pic" src={this.props[0].profileImages} />


        <div className="card-pic-container">
          <img className="card-pic" src={this.props[0].profileImages} />

          <div className="info">
            <p className="card-name">{this.props[0].username}</p>
            <p className="card-age">{this.props[0].age}</p>
          </div>
          <button onClick={() => this.nextUser()}>Next</button>
          {/* <p className="card-bio">Lo que sea</p> */}
        </div>

        <p className="date-title">Mis citas</p>

        {this.state.showDates?.map((elm, i) =>

          <div key={i} className="date">

            <div onClick={() => this.dateSelected(elm)} className="detail">
              <p>Cena</p>
              <p className="date-description">{elm.nameDate}</p>
              <p className="date-category">{elm.description}</p>
            </div>

          </div>

        )}
        {/* <button onClick={this.openModal}>Quiero tener esta cita contigo</button> */}

        <Modal
          show={this.state.showTrivial}
          backdrop="static"
          onHide={this.closeModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Adivina la mentira y podrás hablar conmigo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* {this.random % 2 !== 0 } ? */}
            <div onClick={() => this.createConversation()} className="search-box">

              <div className="search-card two">
                <p className="search-title">{this.props[0].questionTrue}</p>
              </div>

            </div>
            <div onClick={() => this.modalWrong()} className="search-box">

              <div className="search-card two">
                <p className="search-title">{this.props[0].questionFalse}</p>
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
              <p className="search-title">Chatea con {this.props[0].username}</p>
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
            <Modal.Title>Fallaste, ¿Quieres pedirle a {this.props[0].username} una segunda oportunidad?</Modal.Title>
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