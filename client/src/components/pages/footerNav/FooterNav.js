
import './FooterNav.css'

import { Link } from 'react-router-dom'


const FooterNav = () => {


    return (
        <div className="navbar-container">
            <Link className="link" to="/click-me">
                <img className="user" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png" />
            </Link>
            <Link className="link" to="/segundas-oportunidades" >
                <img className="second-chance" src="https://www.pngkit.com/png/full/352-3520722_arrow-repeat-comments-repost-logo-png.png" />
            </Link>
            <Link to="/buscar" >
                <img className="search" src="https://www.freeiconspng.com/uploads/search-icon-png-1.png" />
            </Link>
            <Link className="link" to="/peticiones" >
                <img className="request" src="https://static.thenounproject.com/png/2714894-200.png" />
            </Link>
            <Link className="link" to="/chat" >
                <img className="chat" src="http://cdn.onlinewebfonts.com/svg/img_53145.png" />
            </Link>
        </div>


    )
}
export default FooterNav