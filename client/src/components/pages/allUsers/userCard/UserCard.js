import React from 'react'
import './UserCard.css'

const UserCard = ({ username, age, bio, profileImg, nameDate, description, category }) => {


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