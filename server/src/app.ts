import express from "express";
import { Server } from "socket.io";
import listenIOSocket from "./_servers/io-server";
require("dotenv").config();

const app = express();

const httpServer = app.listen({ port: process.env.SERVER_PORT }, () => {
  console.log(`Server ready on port ${process.env.SERVER_PORT}`);
});

const IOServer = new Server(httpServer, {
  cors: {
    origin: "*",
    credentials: false,
  },
});

listenIOSocket(IOServer);
