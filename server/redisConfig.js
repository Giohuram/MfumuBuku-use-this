// redisConfig.js
const redis = require('redis');

const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
  password: process.env.REDIS_PASSWORD,
});

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

redisClient.on('error', (err) => {
  console.error('Redis connection error:', err);
});

redisClient.on('end', () => {
  console.error('Redis connection ended');
});

async function connectRedis() {
  try {
    await redisClient.connect();
  } catch (err) {
    console.error('Failed to connect to Redis:', err);
    setTimeout(connectRedis, 5000); // Retry connection after 5 seconds
  }
}

connectRedis();

module.exports = redisClient;
