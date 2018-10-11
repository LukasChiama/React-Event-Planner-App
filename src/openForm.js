import React from 'react';

class OpenForm extends React.Component {
  render() {
    return (
      <div className='modal-form'>
        <form>
          <div>
            Event Name <input
              type='text'
              name='name'
              placeholder='Event Name...'
            />
          </div>
          <div>
            Venue <input
              type='text'
              name='venue'
              placeholder='Venue...'
            />
          </div>
          <div>
            Date <input
              type='text'
              name='date'
              placeholder='Date...'
            />
          </div>
          <div>
            Ticket Price <input
              type='number'
              name='price'
              placeholder='Ticket Price...'
            />
          </div>
          <div>
            Description <input
              type='text'
              name='text'
              placeholder='Details...'
            />
          </div>
          <div>
            Event Name <input
              type='text'
              name='name'
              placeholder='Event Name'
            />
          </div>
        </form>
      </div>
    )
  }
}

export default OpenForm;