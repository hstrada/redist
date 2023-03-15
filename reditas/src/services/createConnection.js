import { createClient } from 'redis';

let connection = undefined;

export const createConnection = async (host, port = 6379) => {
  connection = createClient({
    url: `redis://${host}:${port}`
  });

  connection.on('error', (err) => {
    throw new Error(err);
  });

  await connection.connect();
};

export { connection };
