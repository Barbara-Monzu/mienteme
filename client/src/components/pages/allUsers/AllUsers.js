import React, { Component } from "react";
// import { Container } from 'react-bootstrap'
import PeopleService from "../../services/people.service";
import UserCard from "./userCard/UserCard";
import './AllUsers.css'
// import UserProfile from "../profile/UserProfile";

class AllUsers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      people: [],
      selected: undefined
    }

    this.service = new PeopleService()
  }

  componentDidMount() {
    this.refreshUsers()
  }

  refreshUsers = () => {
    this.service.getAllUsers()
      .then(response => {
        const people = response.data
        this.setState({ people: people }, () => this.randomUser())
      })
      .catch(err => console.log(err))
  }

  randomUser = () => {
    const randomeUser = Math.floor(Math.random() * this.state.people.length )
    const newRandomUser = this.state.people.splice(randomeUser, 1)[0]
    this.setState({ selected: newRandomUser })
  }

  render() {

    return (
      <div> 
        <p></p>
          <UserCard {...this.state.selected}/>
        {/* <UserProfile refreshUsers={this.refreshUsers} people={this.state.people} /> */}
      </div>
    )
  }
}

export default AllUsers