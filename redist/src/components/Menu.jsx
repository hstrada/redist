import React from 'react';
import { useState } from 'react';
import { createConnection } from '../services/createConnection';

export const Menu = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createConnection(inputs.host, inputs.port);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        host
        <input
          type="text"
          name="host"
          value={inputs.host || 'localhost'}
          onChange={handleChange}
        />
      </label>
      <label>
        port
        <input
          type="number"
          name="port"
          value={inputs.port || '6379'}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
};
