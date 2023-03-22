import React, { useState } from 'react';
import { Form } from './Form';

export const Menu = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const handleModalVisibility = () => setModalVisibility(!modalVisibility);

  return (
    <>
      <h1>connections</h1>
      {/* adicionar formulario para conexao */}
      <button onClick={handleModalVisibility}>adicionar conexão</button>

      <Form visible={modalVisibility} handleOnClose={handleModalVisibility} />
    </>
  );
};
