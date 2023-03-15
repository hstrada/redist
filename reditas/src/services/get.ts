import { connection } from './createConnection';

export const getKey = async (key: string) => {
  const value = await connection.get(key);

  return value;
};