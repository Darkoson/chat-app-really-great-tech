import { Server } from "socket.io";
import http from "http"


export const listenIOSocket = (httpServer: http.Server): Server => {
    const IOServer = new Server(httpServer, {
      cors: {
        origin: "*",
        credentials: false,
      },
    });

    return IOServer;
} 