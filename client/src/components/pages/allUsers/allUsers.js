// import React, { Component } from "react";
// import { Container } from 'react-bootstrap'
// import UsersService from "../../../services/people.service";
// import CoasterList from "./CoasterList";

// class UsersPage extends Component {
//   constructor() {
//     super()

//     this.state = {
//       people: []
//     }

//     this.service = new UsersService()
//   }

//   componentDidMount() {
//     this.refreshCoasters()
//   }

//   refreshUsers = () => {
//     this.service.getAllUsers()
//       .then(response => {
//         const people = response.data

//         this.setState({ people: people })
//       })
//       .catch(err => console.log(err))
//   }

//   render() {

//     return (
//       <Container>
//         <h1>People List</h1>

//         <UserProfile refreshUsers={this.refreshUsers} people={this.state.people} />

//       </Container>
//     )
//   }
// }

// export default UsersPage