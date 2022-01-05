import React from 'react'
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SuccessModal = (props) => {

    return (
        <Modal show={props.success} backdrop="static" className="userCard-correctTrivial-container" onHide={props.closeModalSuccess}>
        <Modal.Title> <p className="userCard-correctTrivial-title">¡¡¡Correcto!!!</p> </Modal.Title>
        <Modal.Body>

          <div className="userCard-correctTrivial-subcontainer">
            <Link className="userCard-correctTrivial-chat" to={`/chat/${props.conversation}/${props.user._id}`}>
              <p>Chatea con {props.user.username}</p>
            </Link>

            <Link to="/click-me" style={{ margin: "10px" }}>
              <button className="userCard-correctTrivial-button" onClick={() => props.nextUser()}>Más tarde</button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>

    )
}

export default SuccessModal