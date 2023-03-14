import React from 'react';
import { getKeys } from '../services/keys';

export const Keys = () => {
  const handleKeys = () => {
    getKeys().then((keys) => console.log(keys));
  };

  return (
    <div>
      hello
      <button onClick={handleKeys}>List Keys</button>
    </div>
  );
};
