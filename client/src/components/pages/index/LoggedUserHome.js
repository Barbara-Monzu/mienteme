import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";



const  LoggedUserHome = (props) => {

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

            <div style={{marginTop: "20px"}}></div>

            <Link to="/allUsers" style={{margin: "10px"}}>
              <Button variant="dark" size="lg" >allUsers</Button>
            </Link>

            <Link to="/perfil" style={{margin: "10px"}}>
              <Button variant="dark" size="lg">Tu perfil</Button>
            </Link>

            <Link to="/chat" style={{margin: "10px"}}>
              <Button variant="dark" size="lg">Chat del User</Button>
            </Link>

            <Link to="/privatechat" style={{margin: "10px"}}>
              <Button variant="dark" size="lg">Conversación privada</Button>
            </Link>

            <Link to="/" style={{margin: "10px"}}>
              <Button variant="dark" size="lg" onClick={props.logout} >Logout</Button>
            </Link>

          </div>

      </div>


      {/* <Navbar />*/}
    </>
  )
}

export default LoggedUserHome