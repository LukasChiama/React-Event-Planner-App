import React from 'react';
import { Button } from 'reactstrap';

const Event = props => (
  <div className="singleEvent">{props.children}</div>
)
const List = (props) => {
  const eventNodes = props.events.map(event => (
    <Event
      key={event.id}
      id={event.id}
    >
        <ul>
          <li>Event Name: {event.name}</li>
          <li>Venue: {event.venue}</li>
          <li>Ticket Price: {event.price}</li>
          <li>Start Date: {event.date}</li>
          <li>Description: {event.Description}</li>
        </ul>
        <div>
          <Button color='warning'> Edit Event</Button>{' '}
          <Button color='danger'>Delete Event</Button>{' '}
        </div>
    </Event>
  ));
  return (
    <div className='eventsContainer'>
      {eventNodes}
    </div>
  );
};

export default List;