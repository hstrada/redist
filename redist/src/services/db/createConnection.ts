import { createClient, RedisClientType } from 'redis';

let connection: RedisClientType | undefined = undefined;

export const connectDb = async (host: string, port = 6379) => {

  console.log(host, port)
  connection = createClient({
    url: `redis://${host}:${port}`
  });

  connection.on('error', (err) => {
    throw new Error(err);
  });

  await connection.connect();
};

export { connection };
