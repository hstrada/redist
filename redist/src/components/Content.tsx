import React, { useState } from 'react';
import Keys from '../services/db/keys';
import { Value } from './Value';

export const Content = () => {
  const [keys, setKeys] = useState([]);
  const [value, setValue] = useState<string | undefined>();

  const handleKeys = async () => {
    const getAllKeys = await Keys.getAll();
    setKeys(getAllKeys);
  };

  const handleKey = async (item: string) => {
    const getValue = await Keys.get(item);
    setValue(getValue);
  };

  return (
    <div>
      <button onClick={handleKeys}>List Keys</button>

      {keys.map((key) => {
        return (
          <li key={key} onClick={() => handleKey(key)}>
            {key}
          </li>
        );
      })}

      <Value value={value} />
    </div>
  );
};
