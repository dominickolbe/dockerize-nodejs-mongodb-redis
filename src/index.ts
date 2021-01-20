require("dotenv").config();

import Koa from "koa";
import Router from "koa-router";
import { PORT } from "./constants";
import { Database } from "./database/mongo";
import { UserModel } from "./database/mongo/model/User";
import { redisDatabase } from "./database/redis";

const server = async () => {
  console.log(`[Info]: server is starting`);

  const result = await Database.connect();
  if (result.err) process.exit(1);

  const app = new Koa();
  const router = new Router();

  router.get("/", async (ctx) => {
    ctx.response.status = 200;
  });

  const response = await redisDatabase.get("counter");
  // @ts-ignore
  let counter = response !== null ? parseInt(response) : 0;

  router.get("/redis", async (ctx) => {
    counter++;
    redisDatabase.set("counter", counter.toString());
    ctx.body = counter;
  });

  router.get("/mongo", async (ctx) => {
    await new UserModel({}).save();
    const result = await UserModel.find({});
    ctx.body = result;
  });

  router.allowedMethods();
  app.use(router.routes());

  app.listen(PORT, () => {
    console.log(`[Info]: server is running on port ${PORT}`);
  });
};

server();
