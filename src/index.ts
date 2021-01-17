require("dotenv").config();

import Koa from "koa";
import Router from "koa-router";

const SERVER_PORT = process.env.SERVER_PORT;

const server = async () => {
  console.log(`[Info]: server is starting`);

  const app = new Koa();
  const router = new Router();

  router.get("/", async (ctx) => {
    ctx.response.status = 200;
  });

  router.allowedMethods();
  app.use(router.routes());

  app.listen(SERVER_PORT, () => {
    console.log(`[Info]: server is running on port ${SERVER_PORT}`);
  });
};

server();
