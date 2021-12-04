// import React, { Component } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import PeopleService from "../../services/people.service";
// import imgPortada from '../../../images/Portada.jpg'

// class UserProfile extends Component {
//   constructor() {
//     super()

//     this.state = {
//       username: "",
//       description: ""

//     }

//     this.service = new PeopleService()
//   }

//   componentDidMount() {
//     const id = this.props.match.params.id

//     this.service.getOneUser(id)
//       .then(response => {
//         const { username, description} = response.data

//         this.setState({ username, description})
//       })
//       .catch(err => console.log(err))
//   }

//   render() {
//     const { username, description } = this.state

//     return (
//       <Container>
//         <h1>Detalles</h1>

//         <Row className="justify-content-around">
//           <Col md={6} style={{ overflow: "hidden" }}>
//             <article>
//               <h2>{username}</h2>
//               <div>
//                 <p>{escription}</p>
//                 <hr />
        
//               </div>
//             </article>
//           </Col>
//           <Col md={4}>
//             <img src={imgPortada} alt={username} ></img>
//           </Col>
//         </Row>
//       </Container>
//     )
//   }
// }

// export default UserProfile