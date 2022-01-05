
import React from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const WrongModal = (props) => {

    return (
        <Modal show={props.wrong} backdrop="static" onHide={props.closeModalWrong}>
            <Modal.Title> <p className="userCard-wrongTrivial-title">Fallaste, ¿Quieres pedirle a {props.user.username} una segunda oportunidad?</p> 
            </Modal.Title>
            <Modal.Body>
                <div className="userCard-wrongTrivial-buttons">
                    <button className="userCard-wrongTrivial-button" onClick={() => props.createRequest()}>Sí</button>
                    <Link to="/click-me" style={{ margin: "10px" }}>
                        <button className="userCard-wrongTrivial-button" onClick={() => props.nextUser()}>No</button>
                    </Link>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default WrongModal


