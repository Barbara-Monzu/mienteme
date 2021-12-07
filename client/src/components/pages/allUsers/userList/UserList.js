import React, { Component } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import NewCoasterForm from '../../NewCoasterForm'
import CoasterCard from './CoasterCard'

class UserList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }
  }

  openModal = () => {
    this.setState({
      showModal: true
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {



    return (
      <div>
        <Button onClick={this.openModal}>Crea una nueva cita</Button>

        <Modal
          show={this.state.showModal}
          backdrop="static"
          onHide={this.closeModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Nueva Coaster</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewCoasterForm refreshCoasters={this.props.refreshCoasters} closeModal={this.closeModal} />
          </Modal.Body>

        </Modal>
        <Row>
          {this.props.coasters.map(elm => {

            return (
              <Col key={elm._id}>
                <CoasterCard  {...elm} />
              </Col>
            )
          })
          }
        </Row>
      </div>
    )
  }
}

export default UserList