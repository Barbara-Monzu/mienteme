import React from "react";
import { Link } from "react-router-dom";



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

      <div>

        <h1>Click-me </h1>
        <p>¿Verdad o mentira?</p>
        
          <div>

            <Link to="/login" >
              <button>Iniciar sesión</button>
            </Link>

            <Link to="/singup" >
              <button>Crear nueva cuenta</button>
            </Link>

            <Link to="/" >
              <button onClick={props.logout} >Cerrar sesión</button>
            </Link>

            <Link to="/inicio">
              <button onClick={props.logout} >Usuarios</button>
            </Link>

            {/* <Link to="/userDetails" >
              <button onClick={props.logout}>Detalles del Usuario</button>
            </Link> */}

            <Link to="/chat" >
              <button onClick={props.logout}>Chat</button>
            </Link>

            <Link to="/privatechat" >
              <button onClick={props.logout}>Conversación privada</button>
            </Link>

            <Link to="/requestpending" >
              <button onClick={props.logout}>Peticiones</button>
            </Link>

            <Link to="/searchcard" >
              <button onClick={props.logout}>Búsqueda</button>
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