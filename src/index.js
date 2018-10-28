import React from 'react';
import ReactDOM from 'react-dom';
import UUID from 'uuid/v4';
import isEmpty from 'lodash/isEmpty';
import NaviGate from './navbar';
import Carousel from './body';
import Form from './openForm.js'
import { Button } from 'reactstrap';
import './index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.css';

const newEvent = {
  name: '',
  venue: '',
  date: '',
  price: '',
  description: '',
}

class App extends React.Component {
  state = {
    events: (localStorage['Events'] && JSON.parse(localStorage['Events'])) || [],
    newEvent,
    isModalOpen: false,
    updateId: '',
  }


  handleOnChange = ({ target: { name, value } }) =>
    this.setState({ newEvent: { ...this.state.newEvent, [name]: value } })

  validate(values) {
    const errors = [];
    for (let key in values) {
      if (`${values[key]}` === '') {
        errors.push('Required');
      }
    }
    if (!isEmpty(errors)) {
      return false;
    }
    return true;
  }

  submitNewEvent = (e) => {
    e.preventDefault();
    this.setState({ newEvent });
    if (!this.validate(this.state.newEvent)) return;
    const events = [
      ...this.state.events,
      {
        ...this.state.newEvent,
        id: UUID(),
      },
    ];
    this.setState(({ events }), () => this.updateLocalStorage());
  }

  updateLocalStorage = () => {
    localStorage['Events'] = JSON.stringify(this.state.events);
  }

  submitEditedEvent = () => {
    const { updateId, newEvent, events } = this.state;
    const updatedEvents = events.map(event => event.id === updateId ? { ...event, ...newEvent } : event);
    this.setState(({
      events: updatedEvents,
      newEvent: {
        name: '',
        venue: '',
        date: '',
        price: '',
        description: ''
      }
    }),
      () => this.updateLocalStorage());
  }

  handleEditEvent = (id) => {
    const updateEvent = this.state.events.find(x => x.id === id);
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
      newEvent: updateEvent,
      updateId: id
    }))
  }

  handleDeleteEvent = (id) => {
    const events = this.state.events.filter(i => i.id !== id)
    this.setState({ events }, () => this.updateLocalStorage());
  }

  onModalClose = () => {
    this.setState({ isModalOpen: false })
  }

  eventNodes = () => {
    return this.state.events.map(event => (
      <div className="singleEvent"
        key={event.id}
        id={event.id}
      >
        <ul>
          <li><span>Event Name: </span>{event.name}</li>
          <li><span>Venue: </span>{event.venue}</li>
          <li><span>Ticket Price: </span>${event.price}</li>
          <li><span>Date: </span>{event.date}</li>
          <li><span>Description: </span>{event.description}</li>
        </ul>
        <div>
          <Button color='warning' onClick={this.handleEditEvent.bind(this, event.id)}>Edit Event</Button>{' '}
          <Button color='danger' onClick={this.handleDeleteEvent.bind(this, event.id)}>Delete Event</Button>{' '}
          <Form
            isOpen={this.state.isModalOpen}
            onClose={this.onModalClose}
            values={this.state.newEvent}
            handleOnChange={this.handleOnChange}
            submitNewEvent={this.submitEditedEvent}
          />
        </div>
      </div>
    ));
  }
  render() {
    return (
      <div className='page'>
        <div className='navbar'>
          <NaviGate
            values={this.state.newEvent}
            handleOnChange={this.handleOnChange}
            handleOnSubmit={this.submitNewEvent}
          />
        </div>
        <div className='Carousel'>
          <Carousel />
        </div>
        <div className='eventsContainer'>
          {this.eventNodes()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)