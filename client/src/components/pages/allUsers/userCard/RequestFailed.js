import React from 'react'


const RequestFailed = (props) => {
    return (
        <>
            <p className="userCard-request-title">{props.user.username} falló la mentira</p>
            <div className="userCard-request-date">
                <div className="userCard-request-box">
                    <p className="userCard-request-name">{props.dateSelected.nameDate}</p>
                    <p className="userCard-request-description">{props.dateSelected.description}</p>
                    <div className="userCard-request-category-content">
                        <p className="userCard-request-category">{props.dateSelected.category}</p>
                    </div>
                </div>
            </div>
            <p className="userCard-request-again">¿Quieres darle una <br /> segunda oportunidad?</p>
            <div className="userCard-request-buttons">
                <button className="userCard-request-button" onClick={() => props.deleteRequest()}>No</button>
                <button className="userCard-request-button" onClick={() => props.editRequestYes("YES")}>Sí</button>
            </div>
        </>
    )
}


export default RequestFailed
