import Redis from "ioredis";
import connectRedis from "connect-redis";
import session from "express-session";

require("dotenv").config();

export const getRedisStore = () => {
  let redis = new Redis({
    port: Number(process.env.REDIS_PORT),
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
  });
  const RedisStore = connectRedis(session);
  return new RedisStore({
    client: redis,
  });
};
