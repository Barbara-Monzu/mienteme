import React, { Component, createContext, useContext, useState, useEffect } from "react";
import './UserCard.css'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DatesService from "../../../services/dates.service"
import RequestService from "../../../services/request.service"
import ConversationService from "../../../services/conversation.service"

const datesService = new DatesService()
const requestService = new RequestService()
const conversationService = new ConversationService()
let random = Math.floor(Math.random() * 100)

const UserCard = (props) => {

let dates;
let dateSelected;

  useEffect(() => {
    showDates()
  }, [])

  const showDates = () => {
    datesService.getUserDates(this.props.user_id)
      .then(response => {
        dates = response.data
        console.log("estoy mirando las citas del otro ==>", response.data)
      })
      .catch(err => console.log("hay un error al conseguir las citas del otro en el front", err))
  }

  // openTrivial = () => {
  //   this.setState({
  //     showTrivial: true
  //   })
  // }

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

  // closeModalTrivial = () => {
  //   this.setState({
  //     showTrivial: false
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
    // openTrivial()
    dateSelected = date
  }


  const nextUser = () => {
    // closeModalRequest()
    // closeModalResponse()
    this.props.next()

  }


  const createRequest = () => {

    console.log("cita seleccionada", this.state.dateSelected)
    this.requestService.create({ ...this.state.dateSelected })
      .then(response => console.log("creando la request ==>", response.data))
      .catch(err => console.log("hay un error al crear request en el front", err))
  }

  const createConversation = () => {
    this.openModalSuccess()
    this.closeModalTrivial()

    this.conversationService.create(this.props._id, this.state.dateSelected._id)
      .then(response => console.log("creando la conversación ==>", response.data))
      .catch(err => console.log("hay un error crear conver en el front", err))
  }

  
    return (

      <div className="card">
        <img className="profile-pic" src={this.props.user.profileImages} />


        <div className="card-pic-container">
          <img className="card-pic" src={this.props.user.profileImages} />

          <div className="info">
            <p className="card-name">{this.props.user.username}</p>
            <p className="card-age">{this.props.user.age}</p>
          </div>
          <button onClick={() => nextUser()}>Next</button>
          {/* <p className="card-bio">Lo que sea</p> */}
        </div>

        <p className="date-title">Mis citas</p>

        {dates?.map((elm, i) =>

          <div key={i} className="date">

            <div onClick={() => chooseDate(elm)} className="detail">
              <p>{elm.nameDate}</p>
              <p className="date-description">{elm.description}</p>
              <p className="date-category">{elm.category}</p>
            </div>

          </div>

        )}
        {/* <button onClick={this.openModal}>Quiero tener esta cita contigo</button>  */}

            {/* {this.state.random % 2 !== 0 } ?
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
           
            <Link to="/privatechat" style={{ margin: "10px" }}>
              <p className="search-title">Chatea con {this.props.username}</p>
             
            </Link>

            <Link to="/click-me" style={{margin: "10px"}}>
            <button onClick={() => this.nextUser()}>Next</button>
            </Link>

          </Modal.Body>

        </Modal>

        {/* <Modal
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

        </Modal> */}





      </div>

    )


}



export default UserCard