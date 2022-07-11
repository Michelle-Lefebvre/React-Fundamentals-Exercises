import { useState } from 'react';
import PropTypes from 'prop-types';

const AddMessage = ({ onMessage }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // callback function from ChatWindo
    onMessage(message);
    setMessage('');
  };

  // If the user did not type anything, he/she should not be allowed to submit.
  const isDisabled = () => {
    return message === '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='input-group'>
        <input
          type='text'
          className='form-control'
          value={message}
          placeholder='Enter your message'
          onChange={handleInputChange}
        />
        <div className='input-group-append'>
          <button className='btn submit-button' disabled={isDisabled()}>
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

AddMessage.protoTypes = {
  onMessage: PropTypes.func.isRequired,
};

export default AddMessage;
