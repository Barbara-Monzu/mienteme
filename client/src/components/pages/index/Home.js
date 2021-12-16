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

      <div style={{backgroundSize: "cover", height: "100vh", display: "flex", justifyContent: "center", flexDirection: "Column", alignItems: "center"}}>


      <div className="project-logo-container">
        <div className="project-logo-box">
          <img className="project-logo-big" src="https://cdn-icons-png.flaticon.com/512/3798/3798376.png" />
        </div>

      </div>

        <h1 style={{ color: "rgba(255, 172, 201, 0.8)"}}><strong>miénteme</strong></h1>
  
      <Link to="/singup" className="no-dec">
        <h2 className="home-page">Regístrate</h2>
      </Link>

      <Link to="/login" className="no-dec">
        <h2 className="home-page">Inicia sesión</h2>
      </Link>


    </div>
        

    </>
  )
}

export default Home