import { Chat } from "../models/chat";
import { User } from "../models/user";

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginData {
  currentUser: User;
  contacts: User[];
  blockedIds: string[];
}
export interface ISendMessage {
  message: string;
  senderId: string;
  receiverId: string;
}

export interface IRegister extends ILogin {
  firstname: string;
  lastname: string;
  avatar?: string;
}

export interface IBlockContact {
  block: boolean;
  blockerId: string;
  victimId: string;
}
export interface IUsers {
  users: Array<User>;
}
export interface IChats {
  chats: Array<Chat>;
}
export interface IInfo {
  info: string;
}

export interface GQLResult {
  ok: Boolean;
  res: Data;
}

export type Data = User | IChats | IUsers | IInfo | string[] | ILoginData;
