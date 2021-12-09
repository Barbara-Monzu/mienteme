import React from 'react'
import './UserCard.css'

const UserCard = (props) => {
  console.log(props[0].username)
  // console.log("estoy mirando el nombre de user", username)

  return (

    <div className="card">
      <img className="profile-pic" src={props[0].profileImg} />


      <div className="card-pic-container">
        <img className="card-pic" src={props[0].profileImg} />

        <div className="info">
          <p className="card-name">{props[0].username}</p>
          <p className="card-age">{props[0].age}</p>
        </div>
        <button onClick={() => props.next()}>Next</button>
        {/* <p className="card-bio">Lo que sea</p> */}
      </div>

      <p className="date-title">Mis citas</p>

      <div className="date">

        <div className="detail">
          <p>Cena</p>
          <p className="date-description">Una rica cena</p>
          <p>GASTRONOMÍA</p>
        </div>

        <div className="detail">
          <p>Cena</p>
          <p className="date-description">Una rica cena</p>
          <p>GASTRONOMÍA</p>
        </div>

        <div className="detail">
          <p>Cena</p>
          <p className="date-description">Una rica cena</p>
          <p>GASTRONOMÍA</p>
        </div>

      </div>
    </div>

  )
}

export default UserCard