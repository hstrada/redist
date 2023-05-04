import React, { useState } from "react";
import { FormModal } from "../FormModal";

export const Menu = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

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
