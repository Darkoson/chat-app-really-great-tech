
export interface UserProfilePayload {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
}



export const UserProfileSetType = "USER_PROFILE_SET";
export interface UserProfileAction {
  type: string;
  payload: UserProfilePayload | null;
}


