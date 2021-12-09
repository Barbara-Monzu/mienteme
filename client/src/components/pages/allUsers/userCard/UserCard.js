import React from 'react'
import './UserCard.css'

const UserCard = ({ username, age, bio, profileImg, nameDate, description, category }) => {

  return (
    
    <div className="card">
      <img className="profile-pic" src={profileImg}/>

     <body>

     <div className="card-pic-container">
     <img className="card-pic" src={profileImg} />

       <div className="info">
       <p className="card-name">{username}</p>
       <p className="card-age">{age}</p>
      </div>
      <p className="card-bio">{bio}</p>
      </div>

      <p className="date-title">Mis citas</p>

      <div className="date">

        <div className="detail">
        <p>{nameDate}</p>
        <p className="date-description">{description}</p>
        <p>{category}</p>
        </div>

        <div className="detail">
        <p>{nameDate}</p>
        <p className="date-description">{description}</p>
        <p>{category}</p>
        </div>

        <div className="detail">
        <p>{nameDate}</p>
        <p className="date-description">{description}</p>
        <p>{category}</p>
        </div>

      </div>
     </body>
   </div>
  
  )
}

export default UserCard