import { User } from "../models/user";

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister extends ILogin {
  firstname: string;
  lastname: string;
  avatar?: string;
}

export interface IUsers {
  users: Array<User>;
}
export interface IInfo {
  messages?: Array<string>;
}

export interface GQLResult {
  ok: Boolean;
  res: Data;
}

export type Data = User | IUsers | IInfo;
