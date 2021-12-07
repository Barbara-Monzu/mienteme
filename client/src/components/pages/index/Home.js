import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";



const Home = (props) => {

const visualPage = {
  display: "flex", 
  flexDirection: "column", 
  justifyContent: "center",
  textAlign: "center",
  alignItems: "center",
  alignContent: "center",
  position: "absolute", 
  width: "100%",
  top: "200px",
  backgroundBlendMode: "lighten"

}



  return (
    <>

      <div style={{backgroundImage: "linear-gradient( 135deg, #3C8CE7 10%, #00EAFF 100%)", backgroundSize: "cover", height: "100vh", display: "flex", justifyContent: "center", flexDirection: "Column", alignItems: "center"}}>

        <h1 style={{ color: "white", fontFamily: "Helvetica", fontSize: "70px"}}>Click-me </h1>
        <p style={{ color: "white", fontFamily: "Helvetica", fontSize: "30px" }}>¿Verdad o mentira?</p>
        
          <div>

            <Link to="/login" style={{margin: "10px"}}>
              <Button variant="dark" size="lg">Login</Button>
            </Link>

            <Link to="/singup" style={{margin: "10px"}}>
              <Button variant="dark" size="lg">Sing up</Button>
            </Link>

            <Link to="/" style={{margin: "10px"}}>
              <Button variant="dark" size="lg" onClick={props.logout} >Logout</Button>
            </Link>

            <div style={{marginTop: "20px"}}></div>

            <Link to="/allUsers" style={{margin: "10px"}}>
              <Button variant="dark" size="lg" onClick={props.logout} >allUsers</Button>
            </Link>

            <Link to="/userDetails" style={{margin: "10px"}}>
              <Button variant="dark" size="lg" onClick={props.logout}>Detalles del Usuario</Button>
            </Link>
            
          </div>

      </div>


      {/* <Navbar bg="dark" variant="dark">
      <Container>

        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/coaster-list">Lista de montañas rusas</Nav.Link>
          {props.loggedUser ?
            <Nav.Link as={"span"} onClick={props.logout}>Logout</Nav.Link>
            :
            <>
              <Nav.Link as={Link} to="/signup">Registro</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </>
          }
        </Nav>
      </Container>
    </Navbar> */}
    </>
  )
}

export default Home