// import { createAction, createReducer } from "@reduxjs/toolkit";
// import { User } from "../../interfaces";

// const login = createAction("LOGIN");
// const logout = createAction("LOGOUT");
// const fetchCurrentUser = createAction("CURRENT_USER_FETCH");
// const updateCurrentUser = createAction<User[]>("CURRENT_USER_UPDATE");

// export const userReducer = createReducer({}, (builder) => {
//   builder.addCase(login, (state, action) => action.payload);
// });

import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces";
import { AppState } from "../config";

export interface CurrentUser {
  current: User | null;
}

let initialState: CurrentUser = {
  current: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<User>) {
      state.current = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

const currentUserState = (state: AppState): CurrentUser => state.user;

export const selectCurrentUser = createSelector(
  currentUserState,
  (state): User | null => state.current
);

export default userSlice.reducer;
