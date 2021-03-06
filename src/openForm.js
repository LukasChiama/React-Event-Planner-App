import React from 'react';
import isEmpty from 'lodash/isEmpty'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class OpenForm extends React.Component {

  submit = (e) => {
    this.props.submitNewEvent(e)
    this.props.onClose()
  }

  render() {
    const { onClose, isOpen, values, handleOnChange, uploadImage } = this.props;
    if (isEmpty(values)) return null;
    return (
      <div className='modal-form'>
        <Modal isOpen={isOpen} toggle={onClose} className={this.props.className}>
          <ModalHeader toggle={onClose}>Add New Event</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="eventName">Event Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleOnChange}
                  placeholder="Event Name..." />
              </FormGroup>
              <FormGroup>
                <Label for="venue">Venue</Label>
                <Input
                  type="text"
                  name="venue"
                  value={values.venue}
                  onChange={handleOnChange}
                  placeholder="Event Venue..." />
              </FormGroup>
              <FormGroup>
                <Label for="date">Event Date</Label>
                <Input
                  type="date"
                  name="date"
                  value={values.date}
                  onChange={handleOnChange}
                  placeholder="Event Date..." />
              </FormGroup>
              <FormGroup>
                <Label for="price">Ticket Price</Label>
                <Input
                  type="number"
                  name="price"
                  value={values.price}
                  onChange={handleOnChange}
                  placeholder="Ticket Price..." />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="textarea"
                  name="description"
                  value={values.description}
                  onChange={handleOnChange}
                  placeholder="Description..." />
              </FormGroup>
              <FormGroup>
                <Label for="file">Event image</Label>
                <input
                  type="file"
                  name="file"
                  onChange={uploadImage} />
                <FormText color="muted">
                  Upload Event image file
                </FormText>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.submit}>Save</Button>
            <Button color='danger' onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default OpenForm;