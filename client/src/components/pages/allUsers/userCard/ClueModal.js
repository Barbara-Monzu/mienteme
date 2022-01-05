import React from 'react'
import { Modal } from 'react-bootstrap'

const ClueModal = (props) => {

  return (

    <Modal show={props.clue} backdrop="static" className="userCard-correctTrivial-container" onHide={props.closeModalClue}>
      <Modal.Title className="userCard-correctTrivial-title">Pista
        <img className="clue-picture" style={{ width: "40px", heigth: "40px" }} src="https://cdn-icons-png.flaticon.com/512/3798/3798376.png" alt="mienteme-icon" />
      </Modal.Title>
      <Modal.Body>
        <div className="userCard-trivial-subcontainer">
          <div className="userCard-trivial-box">
            <p className="userCard-trivial-text">{props.user.clue}</p>
          </div>
          <div className="userCard-trivial-box" onClick={() => props.closeModalClue()} > Ok
          </div>
        </div>
      </Modal.Body>
    </Modal>

  )
}

export default ClueModal