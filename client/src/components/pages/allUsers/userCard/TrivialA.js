import React from 'react'
import { Modal } from 'react-bootstrap'

const TrivialA = (props) => {

    return (

        <Modal show={props.trivial} backdrop="static" onHide={props.closeModalTrivial} className="userCard-trivial-container">
            <Modal.Title><p className="userCard-trivial-header">¿Cuál es la mentira?</p>
            </Modal.Title>
            <Modal.Body>
                <div className="userCard-trivial-subcontainer">
                    <div onClick={() => props.openWrong()} className="">
                        <div className="userCard-trivial-box">
                            <p className="userCard-trivial-text">{props.user.questionTrue}</p>
                        </div>
                    </div>

                    <div onClick={() => props.createConversation()} className="">
                        <div className="userCard-trivial-box">
                            <p className="userCard-trivial-text">{props.user.questionFalse}</p>
                        </div>
                    </div>
                    {!props.alreadyClue && (
                        <div onClick={() => props.clueModal()} className="">
                            <div className="userCard-trivial-box">
                                <p className="userCard-trivial-text">Pista</p>
                            </div>
                        </div>)}
                </div>

            </Modal.Body>
        </Modal>

    )
}

export default TrivialA