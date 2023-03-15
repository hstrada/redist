import { connection } from './createConnection';

export const getKey = async (key) => {
  const value = await connection.get(key);

  return value;
};