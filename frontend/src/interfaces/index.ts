export interface RegistrationInput {
  email: string;
  password?: string;
  firstname: string;
  lastname: string;
}
export interface LoginInput {
  email: string;
  password: string;
}

export interface SendMessageInput {
  message: string;
  senderId: number;
  receiverId: number;
}

export interface LoginData {
  currentUser: User;
  contacts: User[];
  blockedIds: number[];
}

export interface User extends RegistrationInput {
  id: number;
  online?: boolean;
}

export interface Chat extends SendMessageInput {
  id: number;
  created_at: Date;
}

export interface BlockContactInput {
  block: boolean;
  blockerId: number;
  victimId: number;
}

export interface Users {
  users: User[];
}
export interface Chats {
  chats: Chat[];
}
export interface Info {
  info: string;
}
export type Data = User | Users | Chats | Info;

export interface GQLResult {
  ok: boolean;
  res: Data;
}
