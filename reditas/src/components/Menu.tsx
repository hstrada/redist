import React from 'react';
import { useState } from 'react';
import { createConnection } from '../services/createConnection';

export const Menu = () => {
  const [inputs, setInputs] = useState({ host: null, port: 6379 });

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    createConnection(inputs.host, inputs.port);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        host url
        <input
          type="text"
          name="host"
          value={inputs.host}
          onChange={handleChange}
        />
      </label>
      <label>
        port
        <input
          type="number"
          name="port"
          value={inputs.port}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
};
