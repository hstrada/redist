import React, { useContext, useState } from 'react';
import { FormModal } from '../FormModal';
import {
  StorageContext,
  StorageContextType
} from '../../context/StorageContextType';

export const Menu = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const { connections } = useContext<StorageContextType>(StorageContext);

  console.log(connections, 'connections');

  const handleModalVisibility = () => setModalVisibility(!modalVisibility);

  return (
    <>
      <h1>Connections</h1>
      {/* adicionar formulario para conexao */}
      <button onClick={handleModalVisibility}>Add connection</button>

      <FormModal
        visible={modalVisibility}
        handleOnClose={handleModalVisibility}
      />
    </>
  );
};
