import React from 'react'
import './RequestPending.css'
import { Link } from "react-router-dom"
import FooterNav from '../footerNav/FooterNav'
import HeaderNav from '../headerNav/HeaderNav'
const RequestPending = () => {
    
    // const [ requets, setRequets ] = useState({
    //     creator: undefined,
    //     receiver: undefined,
    // })
// }
    return (


        <div className="request-card">
            <HeaderNav />

            <div className="request-card-pic-container">
                <img className="request-card-pic" src="https://www.fundaciocaixaltea.com/wp-content/uploads/2018/01/default-profile.png"/>

                <div className="request-info">
                    <p className="request-card-name">Guido</p>
                    <p className="request-card-age">27</p>
                </div>
            </div>

            <p className="request-date-title">Cita Seleccionada</p>

            <div className="request-date">
                <p>Cena</p>
                <p>Una rica cena</p>
                <p>GASTRONOMÍA</p>
            </div>

            <FooterNav />
    </div>
    )
}

export default RequestPending