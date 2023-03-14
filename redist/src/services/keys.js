import { connection } from './createConnection';

export const getKeys = async () => {
  const keys = await connection.keys('*');

  return keys;
};
