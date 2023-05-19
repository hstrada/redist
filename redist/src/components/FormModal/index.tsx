import React, { useContext } from 'react';
import { useState } from 'react';
import './index.css';
import {
  StorageContextType,
  StorageContext
} from '../../context/StorageContextType';

interface IFormModal {
  visible?: boolean;
  handleOnClose: () => void;
}

export const FormModal = ({ visible = false, handleOnClose }: IFormModal) => {
  const [inputs, setInputs] = useState({ host: null, port: 6379, name: '' });
  const { createConnection } = useContext<StorageContextType>(StorageContext);

  const handleFormChange = (event: {
    target: { name: string; value: string };
  }) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    createConnection(inputs.name, inputs.host, inputs.port);
    handleOnClose();
  };

  const showModal = visible ? 'block' : 'none';

  return (
    <div className="modal" style={{ display: showModal }}>
      <section className="modal-main">
        <form onSubmit={handleSubmit}>
          <label>
            connection name
            <input
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleFormChange}
            />
          </label>
          <label>
            host url
            <input
              type="text"
              name="host"
              value={inputs.host}
              onChange={handleFormChange}
            />
          </label>
          <label>
            port
            <input
              type="number"
              name="port"
              value={inputs.port}
              onChange={handleFormChange}
            />
          </label>
          <input type="submit" />
        </form>
      </section>
    </div>
  );
};
