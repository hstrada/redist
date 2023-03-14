import { connection } from './createConnection';

export const getKeys = async () => {
  const keys = connection.keys('*');

  return keys;
};
