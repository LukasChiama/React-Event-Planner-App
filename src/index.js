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
    newEvent,
    events: []
  }

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({ newEvent: { ...this.state.newEvent, [name]: value } })
  }

  validate(values) {
    const errors = {};
    for (let key in values) {
      if (key === '') {
        errors[key] = 'Required'
      }
    }

    if (!isEmpty(errors)) {
      return true;
    }
    return false;
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.setState({ newEvent })
    if (this.validate(this.state.newEvent)) return;
    const { updateId } = this.state;
    if (updateId) {
      this.submitUpdatedEvent();
    } else {
      console.log('here for new events');
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
    this.setState({ events });
  }

  submitUpdatedEvent = (id) => {
    const oldEvent = this.state.newEvent.find(c => c._id === id);
    if (!oldEvent) return;
    this.setState({
      name: oldEvent.name,
      venue: oldEvent.venue,
      date: oldEvent.date,
      price: oldEvent.price,
      description: oldEvent.description,
      updateId: id
    });
  }
  onDeleteEvent = (id) => {
    const events = this.state.events.filter(i => i.id !== id)
    this.setState({ events });

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
            closeModal={this.props.OpenFormModal} />
        </div>
        <div className='Carousel'>
          <Carousel />
        </div>
        <div>
          <div>
            <List
              events={this.state.events}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)