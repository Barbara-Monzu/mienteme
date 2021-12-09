import React from 'react'
import HeaderNav from '../headerNav/HeaderNav'
import FooterNav from '../footerNav/FooterNav'
import './SecondsOpportunities.css'

const SecondOpportunity = () => {

    return(
        <div className="second-card">
        <HeaderNav />

            <div className="second-card-pic-container">
                <img className="second-card-pic" src="https://www.fundaciocaixaltea.com/wp-content/uploads/2018/01/default-profile.png"/>

                <div className="second-info">
                    <p className="second-card-name">Guido</p>
                    <p className="second-card-age">27</p>
                </div>
            </div>

            <div className="second-detail">
                <p className="second-dateName">Cena</p>
                <p className="second-description">Una rica cena</p>
                <p className="second-category">GASTRONOMÍA</p>
            </div>

            <a href="#">Intentar después</a>

        <FooterNav />
        </div>
    )
}

export default SecondOpportunity