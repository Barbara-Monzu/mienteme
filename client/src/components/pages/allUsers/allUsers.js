import React, { Component, createContext } from "react";
import { Link, Button } from 'react-bootstrap'
import PeopleService from "../../services/people.service";
import CheckFirstFormService from "../../services/checkFirstFormService.service";
import RequestService from "../../services/request.service";

const MatchContext = createContext(null)

// import UserProfile from "../profile/UserProfile";

class AllUsers extends Component {
  constructor() {
    super()

    this.state = {
      people: [],
      datesPeople: [],
      allUsersPending: [],
      datesUserPending: [],
      allUsersSecondsOpportunities: [],
      datesUserSecondsOpportunities: [],
      username: "",
      profileImages: "",
      age: "",
      genre: "",
      bio: "",
      filter: {},
      city: "",
      questionTrue: "",
      questionFalse: "",
      clue: "",
      CheckFirstForm: false,
      showForm: true,
      selectedUser: "",
      selectedUserPending: "",
      selectedUserSecondOpportunities: ""

    }

    this.service = new PeopleService()
    this.serviceCheckForm = new CheckFirstFormService()
    this.serviceRequest = new RequestService()
    
  
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


  randomUserGlobal = () => {
    const randomUser = Math.floor(Math.random() * this.state.people.length )
    const copyPeople = [...this.state.people]
    const newRandomUser = copyPeople.splice(randomUser, 1)

 

    this.setState({ 
      selected: newRandomUser,
      people: copyPeople,
     })
  }

  randomUserPending = () => {
    const randomUser = Math.floor(Math.random() * this.state.allUsersPending.length )
    const copyPendingPeople = [...this.state.allUsersPending]
    const newRandomUser = this.state.allUsersPending?.splice(randomUser, 1)
    this.setState({ 
      selectedUserPending: newRandomUser,
      allUsersPending: copyPendingPeople
     })
  }

  randomUserSecondsOpportunities = () => {
    const randomUser = Math.floor(Math.random() * this.state.allUsersSecondsOpportunities.length )
    const copySecondsOpportunitiesPeople = [...this.state.allUsersSecondsOpportunities]
    const newRandomUser = this.state.allUsersSecondsOpportunities?.splice(randomUser, 1)
  
    this.setState({ 
      selectedUserSecondOpportunities: newRandomUser,
      allUsersSecondsOpportunities: copySecondsOpportunitiesPeople
     })
  }

  // nextPending = () => {
  //   this.randomUserPending()
  // }


  getRequestPending = () => {
    this.serviceRequest.getAllRequestPending()
    .then(response => {
      let usersPendings = response.data
      this.setState({ 
        allUsersPending: usersPendings,
      }, () => this.randomUserPending())
      
    })
    .catch(err => console.log(err))


  }

  getSecondsOpportunities = () => {
    this.serviceRequest.getAllSecondsOpportunities()
    .then(response => {
      let usersSecondsOpportunities = response.data
      this.setState({ 
        allUsersSecondsOpportunities: usersSecondsOpportunities,
       })
    }, () => this.randomUserSecondsOpportunities())
    .catch(err => console.log(err))

  }

 

  render() {
    return (

      <div style={{backgroundImage: "linear-gradient( 135deg, #3C8CE7 10%, #00EAFF 100%)", backgroundSize: "cover", height: "100vh", display: "flex", justifyContent: "center", flexDirection: "Column", alignItems: "center"}}>

      <h1 style={{ color: "white", fontFamily: "Helvetica", fontSize: "70px"}}>Click-me </h1>
      <p style={{ color: "white", fontFamily: "Helvetica", fontSize: "30px" }}>¿Verdad o mentira?</p>
      <p>Aquí tiene que estar la carta del usuario y debajo nuestra Nav</p>

      {/* <Link to="/" style={{margin: "10px"}}>
              <Button variant="dark" size="lg" onClick={props.logout} >Logout</Button>
      </Link> */}
      
      </div>

       
     
    )
  }
}


export default AllUsers