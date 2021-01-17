require("dotenv").config();

import Koa from "koa";
import Router from "koa-router";
import { redisDatabase } from "./redis";

const SERVER_PORT = process.env.SERVER_PORT;

const server = async () => {
  console.log(`[Info]: server is starting`);

  const app = new Koa();
  const router = new Router();

  router.get("/", async (ctx) => {
    const cacheValue = await redisDatabase.get("usercount");
    const usercount = cacheValue !== null ? cacheValue : 1;
    // @ts-ignore
    redisDatabase.set("usercount", parseInt(usercount) + 1);
    ctx.body = usercount;
  });

  router.allowedMethods();
  app.use(router.routes());

  app.listen(SERVER_PORT, () => {
    console.log(`[Info]: server is running on port ${SERVER_PORT}`);
  });
};

server();
