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
  senderId: string;
  receiverId: string;
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

export interface BlockContactInput {
  block: boolean;
  blockerId: number;
  victimId: number;
}

export interface Users {
  users: User[];
}
export interface Info {
  info: string;
}
export type Data = User | Users | Info;

export interface GQLResult {
  ok: boolean;
  res: Data;
}
