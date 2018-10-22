import React from 'react';
import { Button } from 'reactstrap';
import Form from './openForm.js';

class List extends React.Component {
  state = {
    isModalOpen: false,
    updateEvent: {},
  };

  handleEditEvent = (id) => {
    const updateEvent = this.props.events.find(x => x.id === id)
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
      updateEvent
    })
    )
  }

  editOnChange = () => {
    this.props.handleOnChange()
  }

  handleDeleteEvent = (id) => {
    this.props.handleDeleteEvent(id)
  }

  eventNodes = () => {
    return this.props.events.map(event => (
      <div className="singleEvent"
        key={event.id}
        id={event.id}
      >
        <ul>
          <li><span>Event Name: </span>{event.name}</li>
          <li><span>Venue: </span>{event.venue}</li>
          <li><span>Ticket Price: </span>{event.price}</li>
          <li><span>Date: </span>{event.date}</li>
          <li><span>Description: </span>{event.Description}</li>
        </ul>
        <div>
          <Button color='warning' onClick={this.handleEditEvent.bind(null, event.id)}>Edit Event</Button>{' '}
          <Button color='danger' onClick={this.handleDeleteEvent.bind(null, event.id)}>Delete Event</Button>{' '}
          <Form
            isOpen={this.state.isModalOpen}
            onClose={() => {}}
            values={this.state.updateEvent}
            handleOnChange={this.state.editedEvent}
          />
        </div>
      </div>
    ));
  }
  render() {
    return (
        <div className='eventsContainer'>
          {this.eventNodes()}
        </div>
    );
  }
}
export default List;