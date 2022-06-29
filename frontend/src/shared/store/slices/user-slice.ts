import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../interfaces";
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
    setCurrentUser(state, action: PayloadAction<User|null>) {
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
