import React, { Component } from "react";
import { Container } from 'react-bootstrap'
import PeopleService from "../../services/people.service";
import CheckFirstFormService from "../../services/checkFirstFormService.service";
// import UserProfile from "../profile/UserProfile";

class AllUsers extends Component {
  constructor() {
    super()

    this.state = {
      people: [],
      username: "",
      profileImages: "",
      age: "",
      genre: "",
      bio: "",
      filter: "",
      city: "",
      questionTrue: "",
      questionFalse: "",
      clue: "",
      CheckFirstForm: false,
      showForm: true
    }

    this.service = new PeopleService()
    this.serviceCheckForm = new CheckFirstFormService()
  }

  componentDidMount() {
    this.showForm() 

    if(!this.state.showForm) {
      this.refreshUsers()
      this.randomUser()
    }

   
  }

  showForm = () => {
    this.serviceCheckForm.check()
    .then(response => {
      console.log(response.data)
      response.data.CheckFirstForm &&
      this.setState({ showForm: false }) })
    .catch(err => console.log(err))
  }

  refreshUsers = () => {
    const minAge = this.state.filter.age[0]
    const maxAge = this.state.filter.age[1]
    const filterByGenre = this.state.filter.genre

    this.service.getAllUsers()
      .then(response => {

        if(filterByGenre === "WOMEN"){
        const people = response.data.filter((elm) => elm.filter.genre === "WOMEN")
        people.filter((elm) => (elm >= minAge) && (elm <= maxAge))
        this.setState({ people: people })
        }

        if(filterByGenre === "MEN"){
          const people = response.data.filter((elm) => elm.filter.genre === "MEN")
          people.filter((elm) => (elm >= minAge) && (elm <= maxAge))
          this.setState({ people: people })
          }

        else {
          const people = response.data
          this.setState({ people: people })
        }

      })
      .catch(err => console.log(err))
  }


  randomUser = () => {
    const randomUser = Math.floor(Math.random() * this.state.people.length )
    const newRandomUser = this.state.people?.splice(randomUser, 1)
    const deleteRandomUser = this.state.people?.filter((elm) => elm !== newRandomUser)
    this.setState({ 
      selected: newRandomUser,
      people: deleteRandomUser
     })
  }

  render() {
    return (
      <div>
        <p></p>
          {/* <UserCard {...this.state.selected}/> */}
        {/* <UserProfile refreshUsers={this.refreshUsers} people={this.state.people} /> */}
      </div>
    )
  }
}


export default AllUsers
