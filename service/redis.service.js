import redis from "redis";
import dotenv from "dotenv";

dotenv.config();

const redisClient = redis.createClient({
    host: "oregon-redis.render.com",
    port: "6379"
});

redisClient.on("connect", () => {
    console.log("Redis client connected");
});

redisClient.on("error", (err) =>  {
    console.log(`Something went wrong ${err}`);
})

export default redisClient;