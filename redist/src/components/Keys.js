import React, { useState } from 'react';
import { getKey } from '../services/get';
import { getKeys } from '../services/keys';
import { Value } from './Value';

export const Keys = () => {
  const [keys, setKeys] = useState([]);
  const [value, setValue] = useState();

  const handleKeys = () => {
    getKeys().then((keys) => setKeys(keys));
  };

  const handleKey = (item) => {
    getKey(item).then((itemValue) => setValue(itemValue));
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

      <Value keyValue={value} />
    </div>
  );
};
