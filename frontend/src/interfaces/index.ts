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

export interface User extends RegistrationInput {
  id: number; 
  online?: boolean
}

export interface Users {
  users: User[];
}
export interface Info {
  messages: string[];
}
export type Data = User | Users | Info;

export interface GQLResult {
  ok: true;
  res: Data;
}

