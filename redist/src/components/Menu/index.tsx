import React, { useContext, useState } from 'react';
import { FormModal } from '../FormModal';
import {
  StorageContext,
  StorageContextType
} from '../../context/StorageContextType';

export const Menu = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const { connections, updateConnection, removeConnection } =
    useContext<StorageContextType>(StorageContext);

  const handleModalVisibility = () => setModalVisibility(!modalVisibility);

  const renderConnections = () =>
    connections?.map((connection) => (
      <li key={connection.id} onClick={() => updateConnection(connection.id)}>
        {connection.name}
      </li>
    ));

  return (
    <>
      <h1>Connections</h1>

      <ul>{renderConnections()}</ul>

      <button onClick={handleModalVisibility}>Add connection</button>

      <FormModal
        visible={modalVisibility}
        handleOnClose={handleModalVisibility}
      />
    </>
  );
};
