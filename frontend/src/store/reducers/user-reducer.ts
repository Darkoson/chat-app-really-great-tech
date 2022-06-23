import * as actions from "../actions/user-actions";

export const UserReducer = (
  state: any = null,
  action: actions.UserProfileAction
): actions.UserProfilePayload | null => {
  switch (action.type) { 
    case actions.UserProfileSetType:
      return action.payload;
    default:
      return state;
  }
};
