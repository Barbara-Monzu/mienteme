import React from 'react'
import './RequestPending.css'
import { Link } from "react-router-dom"

const RequestPending = () => {
    
    // const [ requets, setRequets ] = useState({
    //     creator: undefined,
    //     receiver: undefined,
    // })
// }
    return (


        <div className="card">
      <img className="profile-pic" src="https://www.fundaciocaixaltea.com/wp-content/uploads/2018/01/default-profile.png"/>


     <div className="card-pic-container">
     <img className="card-pic" src="https://www.fundaciocaixaltea.com/wp-content/uploads/2018/01/default-profile.png"/>

       <div className="info">
       <p className="card-name">Guido</p>
       <p className="card-age">27</p>
      </div>
      {/* <p className="card-bio">Lo que sea</p> */}
      </div>

      <p className="date-title">Cita Seleccionada</p>

      <div className="date">
            <p>Cena</p>
            <p>Una rica cena</p>
            <p>GASTRONOMÍA</p>
      </div>
   
        <div className="navbar-container">
        <Link className="link" to="/inicio">
            <a href="#" >Usuarios</a>
        </Link>

        <Link className="link" to="/requestpending" >
              <a href="#">Segunda Oportunidad</a>
        </Link>

        <Link to="/searchcard" >
              <a href="#">Búsqueda</a>
        </Link>

        <Link className="link" to="/requestpending" >
              <a href="#">Peticiones</a>
        </Link>

        <Link className="link" to="/chat" >
            <a href="#">Chat</a>
        </Link>
        </div>
    </div>
    )
}

export default RequestPending