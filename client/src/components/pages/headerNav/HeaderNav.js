// import React, { useContext, useHistory } from 'react'
// import AuthService from '../../services/auth.service';
// import { UserContext } from '../../services/UserContext'
// import { Link } from 'react-router-dom'
// import './HeaderNav.css'

// const authService = new AuthService()

// const HeaderNav = () => {

//     const { storeUser } = useContext(UserContext)
    
//     let history = useHistory()
  
//     const logout = (e) => {
  
//       e.preventDefault()
  
//       authService
//         .logout()
//         .then(() => {
//           storeUser(null)
//           history.push(`/`)
//         })
//         .catch(err => console.error(err))
  
//     }


//     return(
//         <div className="header-nav">

//          <Link to="/perfil" style={{margin: "10px"}}>
//          <img className="profile-pic" src="https://www.fundaciocaixaltea.com/wp-content/uploads/2018/01/default-profile.png"/>
//         </Link>
            
        
//          <img className="logout" onClick={logout} src="https://iconape.com/wp-content/files/ij/9415/png/01-16.png" />
       
             
             
//         </div>
//     )
// }

// export default HeaderNav