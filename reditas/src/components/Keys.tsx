import React, { useState } from 'react';
import { getKey } from '../services/get';
import { getKeys } from '../services/keys';
import { Value } from './Value';

export const Keys = () => {
  const [keys, setKeys] = useState([]);
  const [value, setValue] = useState<string | undefined>();

  const handleKeys = async () => {
    const getAllKeys = await getKeys();
    setKeys(getAllKeys);
  };

  const handleKey = async (item: string) => {
    const getValue = await getKey(item);
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
