import { connection } from './createConnection';

export const getAll = async () => {
  const keys = await connection.keys('*');

  return keys;
};

export const get = async (key: string) => {
  const value = await connection.get(key);

  return value;
};
