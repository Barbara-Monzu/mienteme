import React from "react";
import { Link } from "react-router-dom";



const  Home = (props) => {

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

            <Link to="/login" >
              <button>Iniciar sesión</button>
            </Link>

            <Link to="/singup" >
              <button>Crear nueva cuenta</button>
            </Link>


            <div style={{marginTop: "20px"}}></div>
          </div>

      </div>
    </>
  )
}

export default Home