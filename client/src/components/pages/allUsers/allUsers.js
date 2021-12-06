import React, { Component } from "react";
import { Container } from 'react-bootstrap'
import PeopleService from "../../services/people.service";
// import UserProfile from "../profile/UserProfile";

class AllUsers extends Component {
  constructor() {
    super()

    this.state = {
      people: []
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
        this.setState({ people: people })
      })
      .catch(err => console.log(err))
  }

  render() {

    return (
      <Container>
        <h1>People List</h1>

        {this.state.people.map((elm) => <p>{elm.email}</p> )}

        {/* <UserProfile refreshUsers={this.refreshUsers} people={this.state.people} /> */}

      </Container>
    )
  }
}

export default AllUsers