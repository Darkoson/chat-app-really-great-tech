import http from "http";
require("dotenv").config();

import { createConnection } from "typeorm";
import { getExpressApp } from "./servers/express-server";
import { startGqlServer } from "./servers/gql-server";
import { listenIOSocket } from "./servers/io-server";

const main = async () => {
  //getting the configured Express application
  const app = getExpressApp();

  const httpServer = http.createServer(app);

  //starting the graphQl server
  const apolloServer = await startGqlServer(app);

  // connection to the database
  createConnection()
    .then(() => console.log("Database successfully connected !"))
    .catch((err) => {
      console.log("Fail to connect to the database !", err.message);
    });

  //listening to the Sockets
  listenIOSocket(httpServer);

  httpServer.listen({ port: process.env.SERVER_PORT }, () => {
    console.log(
      `🚀 Server ready at http://localhost:${process.env.SERVER_PORT}${apolloServer.graphqlPath}`
    );
  });
};
main();
