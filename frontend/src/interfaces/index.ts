export interface User{
    email?: string;
    password?: string;
    firstname?: string;
    lastname?:string
}
export interface Info{
    messages: string[]
}
export type UserInfo = User | Info;

export interface UserInfoResult {
  ok: true;
  res: UserInfo;
}

