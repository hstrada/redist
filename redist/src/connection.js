const redis = require('redis');

const builder = async () => {
  const client = redis.createClient();

  console.log('hello');

  client.on('error', (err) => {
    throw new Error(err);
  });

  await client.connect();

  const result = client.keys('*');
  result.then((item) => console.log(item));

  await client.quit();
}

module.exports = { builder };
