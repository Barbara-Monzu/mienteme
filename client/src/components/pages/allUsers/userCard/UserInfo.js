import React from 'react'

const UserInfo = (props) => {

    return (

        <div className="userCard-subcontainer">
            <img className="userCard-img" src={props.user.profileImages} />
            <div className="userCard-info-container">
                <div className="userCard-info-1">
                    <p className="userCard-name">{props.user.username}</p>
                    <p className="userCard-age">{props.user.age}</p>
                </div>
                <p className="userCard-bio">{props.user.bio}</p>
            </div>
        </div>

    )
}

export default UserInfo