import redis from "redis";

export const REDIS_HOST = `${process.env.REDIS_HOST}`;
console.log(REDIS_HOST);

const RedisDatabase = () => {
  const client = redis.createClient(REDIS_HOST);

  client.on("connect", () =>
    console.log(`[Info]: (redis) successfully connected.`)
  );

  client.on("error", function (error) {
    console.error(error);
  });

  client.flushdb();

  return {
    get: async (key: string) => {
      return new Promise((resolve, reject) => {
        client.get(key, (error, value) => {
          return resolve(value);
        });
      });
    },
    set: (key: string, value: string) => {
      client.set(key, value);
    },
  };
};

export const redisDatabase = RedisDatabase();
