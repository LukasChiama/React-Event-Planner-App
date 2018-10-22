import React from 'react';
import ReactDOM from 'react-dom';
import UUID from 'uuid/v4';
import isEmpty from 'lodash/isEmpty';
import NaviGate from './navbar';
import List from './list';
import Carousel from './body';
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
  }


  handleOnChange = ({ target: { name, value } }) => {
    this.setState({ newEvent: { ...this.state.newEvent, [name]: value } })
    console.log(this.state.newEvent)
  }

  validate(values) {
    const errors = {};
    for (let key in values) {
      if (key === '') {
        errors[key] = 'Required';
      }
    }
    if (!isEmpty(errors)) {
      return false;
    }
    return true;
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.setState({ newEvent })
    if (!this.validate(this.state.newEvent)) return;
    const { updateId } = this.state;
    if (updateId) {
      this.submitEditedEvent();
    } else {
      this.submitNewEvent();
    }
  }

  submitNewEvent = () => {
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

  submitEditedEvent = (updateId) => {
    const events = [
      ...this.state.events,
      {
        ...this.state.newEvent,
        id: updateId,
      },
    ];
    this.setState({ events }, () => this.updateLocalStorage());
  }

  onDeleteEvent = (id) => {
    const events = this.state.events.filter(i => i.id !== id)
    this.setState({ events }, () => this.updateLocalStorage());

    // api calls here
  }

  render() { 
    return (
      <div className='page'>
        <div className='navbar'>
          <NaviGate
            values={this.state.newEvent}
            handleOnChange={this.handleOnChange}
            handleOnSubmit={this.handleOnSubmit}
          />
        </div>
        <div className='Carousel'>
          <Carousel />
        </div>
          <List
            events={this.state.events}
            handleEditEvent={this.onEditEvent}
            handleDeleteEvent={this.onDeleteEvent}
          />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)