import React from 'react'
import { Modal } from 'react-bootstrap'

const AlreadyMatchModal = (props) => {

  return (

    <Modal show={props.alreadyMatch} backdrop="static" className="userCard-correctTrivial-container" onHide={props.closeAlreadyMatch}>
    <Modal.Header closeButton> Lo sentimos </Modal.Header>
    <Modal.Body >
      <p className="userCard-trivial-text">No puedes seleccionar otra cita, ya has hecho match con este usuario.</p>
    </Modal.Body>
  </Modal>

  )
}

export default AlreadyMatchModal