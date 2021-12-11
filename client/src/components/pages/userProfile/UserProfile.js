import { useContext, useEffect, useState } from "react";
import DatesService from "../../services/dates.service";
import UserCard from '../allUsers/userCard/UserCard'
import UserContext from '../../services/UserContext'


const datesService = new DatesService()

const UserProfile = () => {

  const { loggedUser } = useContext(UserContext)
  const[dates, setMydates] = useState([])
  let dateSelected;
  
  useEffect(() => {
    showDates()
  }, [])
  
  const showDates = () => {
    datesService.getOwnDates(loggedUser._id)
    .then(response => {
      setMydates(response.data)
      console.log("estoy mirando mis citas en mi perfil ==>", response.data)
    })
    .catch(err => console.log("hay un error al conseguir las citas del otro en el front", err))
  }

  console.log(dates)

    console.log("mis citas", dates)

    const chooseDate = (dateSelected) => {


    }
  
  return (
    <>
      <p>Se está renderizando La página de perfil</p>



        <div className="card-pic-container">
          <img className="card-pic" src={loggedUser.profileImages[0]} />

          <div className="info">
            <p className="card-name">{loggedUser.username}</p>
            <p className="card-age">{loggedUser.age}</p>
          </div>
          {/* <p className="card-bio">Lo que sea</p> */}
  

        <p className="date-title">Mis citas</p>

        {dates?.map((elm, i) =>

          <div key={i} className="date">

            <div className="detail">
              <p>{elm.nameDate}</p>
              <p className="date-description">{elm.description}</p>
              <p className="date-category">{elm.category}</p>
            </div>

          </div>

        )}


      </div>


    </>

  )
}

export default UserProfile