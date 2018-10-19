import React from 'react';
import { Button } from 'reactstrap';
import Form from './openForm.js';

class List extends React.Component {
  state = {
    isModalOpen: false,
  };
  
  handleEditEvent = (id) => {
    this.props.handleEditEvent(id);
    console.log(this, 'list this')
    this.setState(({ isModalOpen }) => ({ 
      isModalOpen: !isModalOpen })
    )
  }

  handleDeleteEvent = (id) => {
    console.log(this, 'delete this')
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
        </div>
      </div>
    ));
  }
  render() {
    return (
      <div>
        <div className='eventsContainer'>
          {this.eventNodes()}
        </div>
        <div>
          <Form
            isOpen={this.state.isFormModalOpen}
            onClose={this.handleEditEvent}
          />
        </div>
      </div>
    );
  }
}
export default List;