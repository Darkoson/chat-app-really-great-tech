import { Server, Socket } from "socket.io";
import http from "http";
import { Chat } from "../models/chat";

declare global {
  var onlineUsers: Map<any, any>;
  var chatSocket: Socket;
}

export const listenIOSocket = (httpServer: http.Server): Server => {
  const IOServer = new Server(httpServer, {
    cors: {
      origin: "*",
      credentials: false,
    },
  });

  global.onlineUsers = new Map();

  IOServer.on("connection", (socket) => {
    global.chatSocket = socket;
    
    socket.on("add-user", (userId) => {
      onlineUsers.set(userId, socket.id);
      console.log('new connection', userId);
      
    });

    socket.on("send-message", (data: Chat) => {
      let receiverSocketId = onlineUsers.get(data.receiverId)
       console.log(data.senderId, ": sending to :", data.receiverId);
      if (receiverSocketId) {
        socket.to(receiverSocketId).emit("receive-message",data)
      }
    });
  });

  return IOServer;
};
