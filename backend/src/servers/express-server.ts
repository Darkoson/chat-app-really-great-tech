import express, { Express } from "express";
import session from "express-session";

import cors from "cors";
import { getRedisStore } from "./redis-server";

export const getExpressApp = (): Express => {
  const app = express();
  const store = getRedisStore();


  app.use(
    session({
      store,
      name: process.env.COOKIE_NAME,
      sameSite: "Strict",
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24,
      },
    } as any)
  );

  app.use(express.json());
  app.use(cors());

  return app;
};
