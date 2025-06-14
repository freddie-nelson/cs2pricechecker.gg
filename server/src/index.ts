import "dotenv/config";

import Koa from "koa";
import Logger from "./helpers/Logger";
import { rootRouter } from "./routes";
import Router from "@koa/router";
import { bodyParser } from "@koa/bodyparser";
import cors from "@koa/cors";

const app = new Koa();
app.use(
  bodyParser({
    enableTypes: ["json"],
    encoding: "utf-8",
  })
);
app.use(
  cors({
    credentials: true,
    origin: (ctx) => ctx.request.header.origin || "",
  })
);

const baseRouter = new Router();
baseRouter.use(rootRouter.routes());

app.use(baseRouter.routes());
app.use(baseRouter.allowedMethods());

app.listen(process.env.PORT, () => {
  Logger.log(`Server running at http://localhost:${process.env.PORT}`);
});

app.on("error", (err) => {
  Logger.error(err.message);
});
