require("dotenv").config();

import Koa from "koa";
import Router from "koa-router";
import { SERVER_PORT } from "./constants";
import { Database } from "./database/mongo";
import { UserModel } from "./database/mongo/model/User";
import { redisDatabase } from "./database/redis";

const server = async () => {
  console.log(`[Info]: server is starting`);

  const result = await Database.connect();
  if (result.err) process.exit(1);

  const app = new Koa();
  const router = new Router();

  router.get("/redis", async (ctx) => {
    const cacheValue = await redisDatabase.get("usercount");
    const usercount = cacheValue !== null ? cacheValue : 1;
    // @ts-ignore
    redisDatabase.set("usercount", parseInt(usercount) + 1);
    ctx.body = usercount;
  });

  router.get("/mongo", async (ctx) => {
    await new UserModel({}).save();
    const result = await UserModel.find({});
    ctx.body = result;
  });

  router.allowedMethods();
  app.use(router.routes());

  app.listen(SERVER_PORT, () => {
    console.log(`[Info]: server is running on port ${SERVER_PORT}`);
  });
};

server();
