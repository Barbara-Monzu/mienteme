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

        {this.state.people.map((elm) => {
          return <div >
              <div style={{display: "flex", justifyContent: "space-between"}}>
              <img src={"https://tn.com.ar/resizer/3CWgoZYTJwyqy1puyD7KP46fsc4=/767x0/smart/filters:quality(60)/cloudfront-us-east-1.images.arcpublishing.com/artear/WQCJWLAR5VPYH5MRTQ6H5OFK6E.jpg"} alt={"tarantino"} style={{height: "70px", width: "70px", borderRadius: "50%"}}/>
              <p><strong>online</strong></p> 
              </div>
              <div>
              <p>{elm.username}</p>
              <p>{elm.bio}</p>
              </div>

             <hr></hr>
             
             

          </div>

          
          } )}

        {/* <UserProfile refreshUsers={this.refreshUsers} people={this.state.people} /> */}

      </Container>
    )
  }
}

export default AllUsers