import { connection } from './createConnection';

const getAll = async () => {
  const keys = await connection.keys('*');

  return keys;
};

const get = async (key: string) => {
  const value = await connection.get(key);

  return value;
};

export default { get, getAll }