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


      </div>

    )


}



export default UserCard